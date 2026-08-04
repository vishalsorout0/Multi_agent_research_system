from .agent import build_search_agent,build_reader_agent,writer_chain,critic_chain
import logging

logger = logging.getLogger(__name__)

search_agent=build_search_agent()
reader_agent=build_reader_agent()




def run_research_pipeline(topic:str)->dict:
    state={}

    logger.info("Search agent started")    

    # search agent
    search_result=search_agent.invoke({
        "messages" : [("user", f"Find recent, reliable and detailed information about: {topic}")]
    })


    state['search_results']=search_result['messages'][-1].content

    print("\n search results: ",state['search_results'])


    # reader agent

    logger.info("Reader agent started")    


    reader_result = reader_agent.invoke({
        "messages": [("user",
            f"Based on the following search results about '{topic}', "
            f"pick the most relevant URL and scrape it for deeper content.\n\n"
            f"Search Results:\n{state['search_results'][:800]}"
        )]
    })

    state['scraped_content'] = reader_result['messages'][-1].content

    print("\n Scrapped content: \n ", state["scraped_content"])

    # Writer chain
    print("\n"+" ="*50)
    print("step 3 - Writer is drafting the report ...")
    print("="*50)

    research_combined=(
        # f"SEARCH RESULTS : \n {state['search_results']} \n\n"
        f"DETAILED SCRAPED CONTENT : \n {state['scraped_content']}"
    )

    state['report'] = writer_chain.invoke({
        "topic" : topic,
        "research" : research_combined,
    })

    print("\n Final report \n: ",state['report'])


    # critic report

    critic_report=critic_chain.invoke({
        'report':state['report']
    })

    print("\n critic report: ",critic_report)

    return state


