import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from playwright.async_api import async_playwright
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

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

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/scrape")
async def scrape(request: ScrapeRequest):
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()
            await page.goto(request.url)
            content = await page.content()
            await browser.close()

        prompt = f"Query: {request.query}\n\nHTML Content:\n{content}"
        response = model.generate_content(prompt)

        return {"extracted_data": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
