from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Smart Situation Assistant")

class Request(BaseModel):
    scenario: str
    tone: str = "professional"

@app.get("/")
def health():
    return {"status":"running"}

@app.post("/generate")
def generate(req: Request):
    return {
        "message": f"Generated response for '{req.scenario}' in {req.tone} tone."
    }