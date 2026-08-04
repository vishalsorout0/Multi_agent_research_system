# Pydantic models

from pydantic import BaseModel


class ResearchRequest(BaseModel):
    query: str


class ResearchResponse(BaseModel):
    search_results: str
    scraped_content: str
    report: str