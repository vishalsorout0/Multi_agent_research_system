# API endpoints

from fastapi import APIRouter
from ..schemas import (
    ResearchRequest,
    ResearchResponse,
)
from ..services.research_service import generate_report

router = APIRouter(
    prefix="/research",
    tags=["Research"],
)


@router.post(
    "",
    response_model=ResearchResponse
)
def research(request: ResearchRequest):

    result = generate_report(request.query)

    return result
