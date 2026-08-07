# Multi-Agent Research System 🤖

An AI-powered multi-agent research system that performs deep web research, analyzes information from multiple sources, generates professional research reports, and evaluates the final output using AI critics.

The system combines multiple LLM-powered agents with web search, web scraping, and intelligent report generation to automate the complete research workflow.

---

## 🚀 Overview

Traditional research requires manually searching multiple sources, reading articles, collecting information, and writing summaries.

Multi-Agent Research System automates this process using an agent-based AI architecture.

The system:

- Searches the web for relevant information
- Selects and extracts useful sources
- Analyzes collected research
- Generates a structured professional report
- Reviews the generated report using a critic agent

---

Live Demo:- https://multi-agent-research-system-sable.vercel.app/

---

# ✨ Features

## Multi-Agent AI Architecture

The project uses specialized AI agents, where each agent performs a specific responsibility.

## Web Research Automation

- Uses Tavily Search API for real-time web search
- Collects relevant sources automatically
- Extracts information from web pages

## Intelligent Research Analysis

- Processes multiple sources
- Removes redundant information
- Identifies important insights
- Prepares structured research notes

## AI Report Generation

Generates professional research reports containing:

- Introduction
- Key findings
- Technical analysis
- Advantages
- Challenges
- Future scope
- Sources

## AI Critic System

A dedicated critic agent evaluates generated reports and provides:

- Quality score
- Strengths
- Weaknesses
- Improvement suggestions

## Modern React Interface

Frontend provides:

- Interactive research interface
- AI pipeline visualization
- Loading states
- Search results display
- Generated report view
- Critic feedback display
- Custom cursor animation

---

# 🏗️ System Architecture
             User Input
                 |
                 ↓
         React Frontend
                 |
                 ↓
          FastAPI Backend
                 |
                 ↓
      Multi-Agent Research Pipeline

                 |
    --------------------------------

                 ↓

          Search Agent
    (Tavily Web Search)

                 ↓

          Reader Agent
   (Source Selection + Scraping)


                 ↓

         Writer Agent
   (Report Generation)

                 ↓

         Critic Agent
    (Quality Evaluation)

                 ↓

         Final Research Report
         
---

# 🔄 Workflow

1. User enters a research topic.

2. Search Agent:
- Uses Tavily API
- Finds relevant web sources
- Returns search results

3. Reader Agent:
- Selects important URLs
- Extracts webpage content


4. Writer Agent:
- Converts research into a professional report

5. Critic Agent:
- Reviews report quality
- Provides feedback and scoring

---

# 🛠️ Tech Stack

## Backend

| Technology | Purpose |
|---|---|
| Python | Core programming language |
| FastAPI | Backend API framework |
| LangChain | Agent orchestration framework |
| LangChain Core | LLM workflows |
| LangChain Community | AI integrations |
| Groq API | LLM inference |
| OpenAI API | LLM support |
| Mistral AI | LLM support |
| Tavily API | Web search |
| BeautifulSoup | Web scraping |
| Requests | HTTP requests |
| Uvicorn | ASGI server |


## Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| JavaScript | Frontend logic |
| HTML | Structure |
| CSS | Styling |
| Vite | Frontend build tool |
| Axios | Backend communication |

---

# 📂 Project Structure
Folder PATH listing for volume New Volume
Volume serial number is 00000095 9C02:CAE4
```bash
Multi-Agent Research System:
│  
│   
├───backend
│   │   .env
│   │   .gitignore
│   │   requirements.txt
│   │   run.py
│   │   
│   ├───app
│   │   │   main.py
│   │   │   schemas.py
│   │   │   __init__.py
│   │   │   
│   │   ├───routes
│   │   │   │   research.py
│   │   │   │   
│   │   │   └───__pycache__
│   │   │           research.cpython-311.pyc
│   │   │           
│   │   ├───services
│   │   │   │   research_service.py
│   │   │   │   
│   │   │   └───__pycache__
│   │   │           research_service.cpython-311.pyc
│   │   │           
│   │   └───__pycache__
│   │           main.cpython-311.pyc
│   │           main.cpython-312.pyc
│   │           schemas.cpython-311.pyc
│   │           __init__.cpython-311.pyc
│   │           __init__.cpython-312.pyc
│   │           
│   └───core
│       │   agent.py
│       │   pipeline.py
│       │   tools.py
│       │   
│       └───__pycache__
│               agent.cpython-311.pyc
│               pipeline.cpython-311.pyc
│               tools.cpython-311.pyc
│               
└───frontend
    │   .gitignore
    │   components.json
    │   eslint.config.js
    │   index.html
    │   jsconfig.json
    │   package-lock copy.json
    │   package-lock.json
    │   package.json
    │   README.md
    │   vite.config.js
    │   
    ├───node_modules
    │   ├───@rolldown
    │   │   └───binding-win32-x64-msvc
    │   │           rolldown-binding.win32-x64-msvc.node
    │   │           
    │   └───@tailwindcss
    │       ├───node
    │       │   └───node_modules
    │       │       └───lightningcss-win32-x64-msvc
    │       │               lightningcss.win32-x64-msvc.node
    │       │               
    │       └───oxide-win32-x64-msvc
    │               tailwindcss-oxide.win32-x64-msvc.node
    │               
    ├───public
    │       favicon.svg
    │       icons.svg
    │       
    └───src
        │   App.jsx
        │   index.css
        │   main.jsx
        │   
        ├───assets
        │       hero.jpg
        │       
        ├───components
        │   │   CriticReport.jsx
        │   │   CursorFollower.jsx
        │   │   Hero.jsx
        │   │   Loading.jsx
        │   │   Navbar.jsx
        │   │   Pipeline.jsx
        │   │   Report.jsx
        │   │   ScrapedContent.jsx
        │   │   SearchBox.jsx
        │   │   SearchResults.jsx
        │   │   
        │   └───ui
        │           button.jsx
        │           
        ├───lib
        │       utils.js
        │       
        ├───services
        │       api.js
        │       
        └───styles
                card.css
                hero.css
                loading.css
                navbar.css
                pipeline.css
                search.css
```
---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>

cd Multi_agent_research_system
```

Backend Setup

Navigate to backend:

cd backend

Create virtual environment:

python -m venv .venv

Activate environment:

Windows:

.venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Create .env file:

GROQ_API_KEY=your_api_key
TAVILY_API_KEY=your_api_key

Run backend:

python run.py

Backend will start on:

http://127.0.0.1:8000
Frontend Setup

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Run development server:

npm run dev

Frontend will start on:

http://localhost:5173
🔑 Environment Variables

Backend requires:

GROQ_API_KEY
TAVILY_API_KEY
📡 API
Research Endpoint
POST /research

Request:

{
  "query": "Artificial Intelligence in healthcare"
}

Response:

{
  "report": "Generated research report",
  "critic_report": "AI evaluation"
}
🧠 AI Agents
Search Agent

Responsibilities:

Performs web search
Finds relevant sources
Collects research material
Reader Agent

Responsibilities:

Selects useful URLs
Extracts webpage information
Analyzer Agent

Responsibilities:

Processes collected research
Extracts key insights
Creates structured analysis
Writer Agent

Responsibilities:

Generates final professional report
Critic Agent

Responsibilities:

Evaluates report quality
Provides improvement suggestions
---
📌 Learning Outcomes

This project demonstrates:

Multi-agent AI systems
LLM orchestration
LangChain workflows
AI tool integration
Web scraping pipelines
Full-stack AI application development
Production-style backend architecture
---
👨‍💻 Author

Vishal Sorout

⭐ If you like this project

Give it a star ⭐ and feel free to explore, improve, and contribute.