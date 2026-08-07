import {useState} from "react";
import Navbar from "./components/Navbar"
import SearchBox from "./components/SearchBox";
import Pipeline from "./components/Pipeline";
import Hero from "./components/Hero"
import Loading from "./components/Loading";
import SearchResults from "./components/SearchResults";
import ScrapedContent from "./components/ScrapedContent";
import SplashCursor from "./components/CursorFollower"
import Report from "./components/Report";
import CriticReport from "./components/CriticReport";
import "./index.css";


function App(){
  const [loading,setloading] = useState(false);
  const [result,setresult] =useState(null);

  return(
    <>


      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.35}
        CURL={21}
        SPLAT_RADIUS={0.31}
        SPLAT_FORCE={7500}
        COLOR_UPDATE_SPEED={13}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <Navbar/>

      <Hero/>


      <SearchBox
        setLoading={setloading}
        setResult={setresult}
      />

      {loading && <Loading/>}

      {result && (
        <>  
          <SearchResults data={result.search_results} />
          <ScrapedContent data={result.scraped_content} />
          <Report data={result.report} />
          <CriticReport data={result.critic_report} />

        </>
      )}
      <Pipeline />
    </>
  );
}

export default App;
