from .agent import build_search_agent,build_reader_agent,writer_chain,critic_chain
from .tools import websearch
import json
import logging

logger = logging.getLogger(__name__)

reader_agent=build_reader_agent()


def run_research_pipeline(topic:str)->dict:
    state={}

    logger.info("Search agent started")    
    
    search_results = websearch.invoke({"query": topic})
    state["search_results"] = search_results


    logger.info("Reader agent started")   


    reader_result = reader_agent.invoke({
        "messages": [("user",
            f"Based on the following search results about '{topic}', "
            f"Select the 3 most relevant URLs..\n\n"
            f"Search Results:\n{state['search_results'][:800]}"
        )]
    })

    state['scraped_content'] = reader_result['messages'][-1].content

    print("\n Scrapped content: \n ", state["scraped_content"])

    # Writer chain
    print("\n"+" ="*50)
    print("Writer is drafting the report ...")
    print("="*50)

    research_combined = f"""
        SEARCH RESULTS:
        {json.dumps(state["search_results"], indent=2)}

        SCRAPED CONTENT:
        {state["scraped_content"]}
        """

    state['report'] = writer_chain.invoke({
        "topic" : topic,
        "research" : research_combined,
    })

    print("\n Final report \n: ",state['report'])


    # critic report

    state['critic_report']=critic_chain.invoke({
        'report':state['report'],
    })

    print("\n critic report: ",state['critic_report'])

    return state

