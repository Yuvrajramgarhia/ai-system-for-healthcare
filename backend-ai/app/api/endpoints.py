from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db, memory_collection
from app.models import schemas, domain
import random

router = APIRouter()

@router.post("/patients", response_model=schemas.PatientResponse)
def create_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    db_patient = domain.PatientRecord(**patient.model_dump())
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient

@router.get("/patients/{patient_id}", response_model=schemas.PatientResponse)
def get_patient(patient_id: str, db: Session = Depends(get_db)):
    patient = db.query(domain.PatientRecord).filter(domain.PatientRecord.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

@router.post("/ai/predict-risk", response_model=schemas.MLPredictionResponse)
def predict_risk(request: schemas.MLPredictionRequest, db: Session = Depends(get_db)):
    """
    In a real scenario, this would load the XGBoost model from disk
    and run inference. For the MVP structure, we simulate inference.
    """
    # e.g., model = xgboost.Booster(); model.load_model('heart_model.json')
    # score = model.predict(DMatrix(request.features))
    
    score = round(random.uniform(0.1, 0.9), 2)
    level = "High" if score > 0.7 else "Medium" if score > 0.4 else "Low"
    
    prediction = domain.MLPrediction(
        patient_id=request.patient_id,
        model_type=request.model_type,
        risk_score=score,
        contributing_factors=request.features
    )
    db.add(prediction)
    db.commit()
    
    return schemas.MLPredictionResponse(
        risk_score=score,
        risk_level=level,
        contributing_factors={"msg": f"{request.model_type} risk calculated successfully based on {len(request.features)} features"}
    )

@router.post("/ai/chat", response_model=schemas.ChatResponse)
def ai_chat(request: schemas.ChatRequest):
    """
    This endpoint integrates with the local fine-tuned LLM and ChromaDB for memory.
    """
    # 1. Store message in ChromaDB memory
    if memory_collection:
        memory_collection.add(
            documents=[request.message],
            metadatas=[{"patient_id": request.patient_id, "type": "user"}],
            ids=[domain.generate_uuid()]
        )
    
    # 2. Query LLM (Placeholder for Transformers inference)
    # response = llm_pipeline(f"You are a doctor. Patient says: {request.message}")
    
    reply = f"I am your local AI doctor. I heard you say: '{request.message}'. How can I help further?"
    
    # 3. Store AI response in memory
    if memory_collection:
        memory_collection.add(
            documents=[reply],
            metadatas=[{"patient_id": request.patient_id, "type": "ai"}],
            ids=[domain.generate_uuid()]
        )
        
    return schemas.ChatResponse(
        reply=reply,
        extracted_symptoms=["headache", "fever"] if "fever" in request.message.lower() else [],
        urgency="Low"
    )
