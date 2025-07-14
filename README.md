<md>
# Emotion Reflection Tool

A Mock web app that allows users to reflect on how they're feeling and receive a mock emotion analysis.

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Design**: Mobile-first, responsive
- **Communication**: REST API (POST request)


---

## Folder Structure

```plaintext
Emotion-Reflection-Tool/
├── backend/          # FastAPI backend
├── src/              # React frontend (main code lives here)
└── README.md
```

## Getting Started

### Frontend

Run these commands in your VS Code terminal in the frontend directory:

```shellscript
cd Emotion-Reflection-Tool # This is the main folder where frontend code is written
npm install              # To install dependencies
npm run dev              # To run the frontend server, which will run on port 5173
```

Frontend runs on: `http://localhost:5173`

### Backend

Run these commands to set up the backend:

```shellscript
cd backend                 # 'backend' is the folder where backend code is written
python -m venv venv        # Used for creating a virtual environment
source venv/bin/activate   # Used for activating the virtual environment
pip install fastapi uvicorn # Used for installing dependencies
uvicorn main:app --reload  # To run the backend program (or use the command below)
# or
python -m uvicorn main:app --reload --port 8000 # To run the backend program on port 8000
```

Now the backend will run on this port: `http://localhost:8000`

## Mock API

This is a mock API endpoint:

`POST /analyze`

**Request Body Example:**

```json
{
  "text": "I'm feeling excited about the weekend!"
}
```

**Response Body Example:**

```json
{
  "emotion": "Excited",
  "confidence": 0.91
}
```

## How to Use the Web App

1. First, the user will write anything in the input box.
2. After that, the user will click the "Analyze" button.
3. After clicking, the analysis result will be shown in the bottom card.


</md>