from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from datetime import datetime

class PatientBase(BaseModel):
    full_name: str
    demographics: Dict[str, Any]
    allergies: List[str] = []
    active_medications: List[str] = []

class PatientCreate(PatientBase):
    pass

class PatientResponse(PatientBase):
    id: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class MLPredictionRequest(BaseModel):
    patient_id: str
    model_type: str
    features: Dict[str, float]

class MLPredictionResponse(BaseModel):
    risk_score: float
    risk_level: str
    contributing_factors: Dict[str, Any]

class ChatRequest(BaseModel):
    patient_id: str
    message: str

class ChatResponse(BaseModel):
    reply: str
    extracted_symptoms: List[str] = []
    urgency: str = "Low"
