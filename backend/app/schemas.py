# Pydantic models

from pydantic import BaseModel
from typing import List, Dict


class ResearchRequest(BaseModel):
    query: str


class ResearchResponse(BaseModel):
    search_results: List[Dict]
    scraped_content: str
    report: str
    critic_report: str