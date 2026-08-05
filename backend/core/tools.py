from langchain.tools import tool
import requests
from bs4 import BeautifulSoup
from tavily import TavilyClient
import os
from dotenv import load_dotenv
load_dotenv()


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
        for tag in soup(["script", "style", "nav", "footer", "header", "aside", "form", "noscript", "svg"]):
            tag.decompose()

        main = soup.find("article") or soup.find("main")
        text = main.get_text(" ", strip=True) if main else soup.get_text(" ", strip=True)

        # Skip pages with very little content
        if len(text) < 300:
            return ""

        return text[:2000]

    except Exception as e:
        print(f"Skipping {url}: {e}")
        return ""





