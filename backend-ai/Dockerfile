FROM python:3.11-slim

WORKDIR /app

# Install system dependencies for OpenCV/EasyOCR and PostgreSQL
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements or install directly (for MVP structure)
COPY requirements.txt .
# If no requirements.txt exists yet, install core packages
RUN pip install --no-cache-dir fastapi uvicorn sqlalchemy psycopg2-binary chromadb pydantic scikit-learn xgboost transformers torch easyocr python-multipart "pydantic[email]"

COPY . .

# Expose FastAPI port
EXPOSE 8000

# Run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
