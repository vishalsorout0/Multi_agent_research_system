from langchain.agents import create_agent
from langchain_mistralai import ChatMistralAI
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from .tools import websearch, scrape_url
from langchain_core.messages import SystemMessage
from dotenv import load_dotenv
load_dotenv()


llm=ChatMistralAI(model="mistral-small-2506",temperature=0)
# llm=ChatGoogleGenerativeAI(model="gemini-2.5-flash",temperature=0.2)
# llm=ChatGroq(model="llama-3.3-70b-versatile",temperature=0)


def build_search_agent():
    return create_agent(
        model=llm,
        tools=[websearch],
        system_prompt="""
You are a search agent.

Always use the websearch tool.
Return ONLY the search results as a JSON array.
 
Format:
[
  {
    "title": "...",
    "url": "...",
    "snippet": "..."
  }
]

Do not summarize.
Do not explain.
"""
    )

def build_reader_agent():
    return create_agent(
        model=llm,
        tools=[scrape_url]
    )


# writer chain 

writer_prompt= ChatPromptTemplate.from_messages([
    ("system", """You are an expert research writer . Use ONLY the supplied research.

        Never invent facts.
        Never invent URLs.
        Never invent sources.

        If information is missing, explicitly say so."""),
    ("human", """Write a research report on the topic below.

Topic: {topic}

Research Gathered:
{research}

Structure the report as:
- Introduction
- Key Findings (4 well-explained points)
- Conclusion
- Sources (list all URLs found in the research max 10 links)

Be factual and professional."""),
])


writer_chain= writer_prompt | llm | StrOutputParser()




# critic chain 

critic_prompt=ChatPromptTemplate.from_messages([
       ("system", "You are a sharp and constructive research critic. Be honest and specific."),
    ("human", """Review the research report below and evaluate it strictly.

Report:
{report}

Respond in this exact format:

Score: X/10

Strengths:
- ...
- ...

Areas to Improve:
- ...
- ...

One line verdict:
..."""),
])


critic_chain= critic_prompt | llm | StrOutputParser()




