from core.pipeline import run_research_pipeline


def generate_report(query: str):
    result = run_research_pipeline(query)

    return {
        "search_results": result["search_results"],
        "scraped_content": result["scraped_content"],
        "report": result["report"],
    }