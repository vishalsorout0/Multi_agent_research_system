from langchain.tools import tool
import requests
from bs4 import BeautifulSoup
from tavily import TavilyClient
import os
from dotenv import load_dotenv
load_dotenv()
from rich import print




tavily=TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))


@tool
def websearch(query:str) ->list:
    """Search the web for recent and reliable information on a topic . Returns Titles , URLs and snippets."""
    res=tavily.search(query=query,max_results=5)
    return [
        {
            "title":r["title"],
            "url":r["url"],
            "snippet":r["content"][:300]
        }
        for r in res["results"]
    ]



@tool
def scrape_url(url: str) -> str:
    """Scrape and return clean text content from a given URL for deeper reading."""
    try:
        res = requests.get(url, timeout=8, headers={"User-Agent": "Mozilla/5.0"})
        res.raise_for_status()

        soup = BeautifulSoup(res.text, "html.parser")
        for tag in soup(["script", "style", "nav", "footer"]):
            tag.decompose()

        text = soup.get_text(separator=" ", strip=True)

        # Skip pages with very little content
        if len(text) < 300:
            return ""

        return text[:5000]

    except Exception as e:
        print(f"Skipping {url}: {e}")
        return ""





