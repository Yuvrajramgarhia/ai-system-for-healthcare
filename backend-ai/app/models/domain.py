from sqlalchemy import Column, String, Float, Boolean, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from app.db.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class PatientRecord(Base):
    __tablename__ = "patient_records"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    full_name = Column(String, index=True)
    demographics = Column(JSON) # age, gender, blood_type
    allergies = Column(JSON)
    active_medications = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)

class MLPrediction(Base):
    __tablename__ = "ml_predictions"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    patient_id = Column(String, ForeignKey("patient_records.id"))
    model_type = Column(String) # e.g., "HeartDisease", "Diabetes"
    risk_score = Column(Float)
    contributing_factors = Column(JSON)
    timestamp = Column(DateTime, default=datetime.utcnow)
    
    patient = relationship("PatientRecord")

class LabReport(Base):
    __tablename__ = "lab_reports"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    patient_id = Column(String, ForeignKey("patient_records.id"))
    raw_extracted_text = Column(String)
    structured_biomarkers = Column(JSON)
    is_abnormal = Column(Boolean, default=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    
    patient = relationship("PatientRecord")
