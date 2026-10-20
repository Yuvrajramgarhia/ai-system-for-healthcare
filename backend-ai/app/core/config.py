from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "MediNova Custom AI Backend"
    API_V1_STR: str = "/api/v1"
    
    # Database
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "medinova"
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./medinova.db"
    
    # ChromaDB
    CHROMA_PERSIST_DIR: str = "./chroma_db"
    
    # Models Config
    USE_QUANTIZED_MODELS: bool = True
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
