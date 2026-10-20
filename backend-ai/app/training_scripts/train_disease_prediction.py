import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

def train_disease_model(dataset_path: str, model_save_path: str, target_col: str = "target"):
    print(f"Loading dataset from {dataset_path}...")
    
    # In a real scenario, you download the dataset via Kaggle API or read from local CSV
    # For demonstration, let's assume the CSV is present or we create dummy data
    if not os.path.exists(dataset_path):
        print("Dataset not found. Generating dummy dataset for structural completeness...")
        import numpy as np
        df = pd.DataFrame(np.random.randint(0,100,size=(1000, 10)), columns=[f'feature_{i}' for i in range(10)])
        df[target_col] = np.random.randint(0, 2, size=1000)
    else:
        df = pd.read_csv(dataset_path)

    X = df.drop(columns=[target_col])
    y = df[target_col]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Training XGBoost Classifier...")
    model = xgb.XGBClassifier(
        n_estimators=100,
        max_depth=5,
        learning_rate=0.1,
        use_label_encoder=False,
        eval_metric='logloss'
    )
    
    model.fit(X_train, y_train)

    print("Evaluating Model...")
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy:.4f}")
    print("Classification Report:\n", classification_report(y_test, y_pred))

    print(f"Saving model to {model_save_path}...")
    os.makedirs(os.path.dirname(model_save_path), exist_ok=True)
    model.save_model(model_save_path)
    
    print("Training Pipeline Complete!")

if __name__ == "__main__":
    # Example usage for Heart Disease
    train_disease_model(
        dataset_path="data/heart_disease.csv",
        model_save_path="models/heart_disease_xgb.json"
    )
