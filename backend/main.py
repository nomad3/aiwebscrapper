from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScrapeRequest(BaseModel):
    url: str
    query: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/scrape")
def scrape(request: ScrapeRequest):
    # Mock response for now
    return {"url": request.url, "query": request.query, "extracted_data": "This is a mock response."}
