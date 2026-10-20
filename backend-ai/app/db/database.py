from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import chromadb
from app.core.config import settings

# --- Relational Database (PostgreSQL) ---
# For development/MVP without setting up Postgres yet, we can fallback to SQLite
connect_args = {"check_same_thread": False} if settings.SQLALCHEMY_DATABASE_URI.startswith("sqlite") else {}
try:
    engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True, connect_args=connect_args)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
except Exception:
    # Fallback to SQLite for MVP if postgres is not running
    SQLALCHEMY_DATABASE_URI = "sqlite:///./medinova.db"
    engine = create_engine(SQLALCHEMY_DATABASE_URI, connect_args={"check_same_thread": False})
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- Vector Database (ChromaDB) ---
try:
    chroma_client = chromadb.PersistentClient(path=settings.CHROMA_PERSIST_DIR)
    memory_collection = chroma_client.get_or_create_collection(name="patient_memory")
    knowledge_collection = chroma_client.get_or_create_collection(name="medical_knowledge")
except Exception as e:
    print(f"Warning: ChromaDB initialization failed: {e}")
    chroma_client = None
    memory_collection = None
    knowledge_collection = None
