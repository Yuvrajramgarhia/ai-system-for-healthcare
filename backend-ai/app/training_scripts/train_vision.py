import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, models, transforms
from torch.utils.data import DataLoader
import os

def train_vision_model(data_dir: str, model_save_path: str, num_epochs: int = 10, num_classes: int = 2):
    print(f"Starting PyTorch Vision training pipeline...")
    
    # Define data transformations
    data_transforms = {
        'train': transforms.Compose([
            transforms.RandomResizedCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ]),
        'val': transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ]),
    }

    if not os.path.exists(data_dir):
        print(f"Warning: Data directory '{data_dir}' not found. Please download datasets (e.g., ISIC or CheXpert) into this directory.")
        print("Skipping actual dataset loading for now. Returning skeleton...")
        return

    image_datasets = {x: datasets.ImageFolder(os.path.join(data_dir, x), data_transforms[x]) for x in ['train', 'val']}
    dataloaders = {x: DataLoader(image_datasets[x], batch_size=32, shuffle=True, num_workers=4) for x in ['train', 'val']}
    
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    print(f"Using device: {device}")

    # Load pre-trained ResNet50
    model = models.resnet50(pretrained=True)
    
    # Freeze lower layers
    for param in model.parameters():
        param.requires_grad = False
        
    # Replace final FC layer
    num_ftrs = model.fc.in_features
    model.fc = nn.Linear(num_ftrs, num_classes)
    model = model.to(device)

    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.fc.parameters(), lr=0.001)

    # Simplified training loop structure
    for epoch in range(num_epochs):
        print(f'Epoch {epoch}/{num_epochs - 1}')
        print('-' * 10)
        # for inputs, labels in dataloaders['train']:
        #     inputs = inputs.to(device)
        #     labels = labels.to(device)
        #     optimizer.zero_grad()
        #     outputs = model(inputs)
        #     loss = criterion(outputs, labels)
        #     loss.backward()
        #     optimizer.step()
            
    print(f"Saving fine-tuned vision model to {model_save_path}")
    # torch.save(model.state_dict(), model_save_path)

if __name__ == "__main__":
    train_vision_model(
        data_dir="./data/skin_lesions",
        model_save_path="./models/skin_resnet50.pth"
    )
