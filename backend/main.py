from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel
import random, asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Reflection(BaseModel):
    text: str

MOCK_EMOTIONS = ["Happy", "Sad", "Angry", "Anxious", "Excited", "Calm", "Neutral"]

@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    text = reflection.text.strip()

    if len(text) < 3:
        raise HTTPException(status_code=400, detail="At least 3 characters must be typed.")

    await asyncio.sleep(2.5)

    return JSONResponse(
        status_code=200,
        content={
            "emotion": random.choice(MOCK_EMOTIONS),
            "confidence": round(random.uniform(0.6, 1.0), 2)
        }
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={"detail": "Invalid request format. Please provide a valid 'text' field."}
    )

@app.exception_handler(Exception)
async def handle_all_errors(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": "An unexpected error occurred. Please try again later."}
    )
