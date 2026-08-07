import "../styles/navbar.css";
import heroImage from "../assets/hero.jpg";



function Navbar(){
    return (
        <nav className="navbar">
            <div className="main-logo">
            <img src={heroImage} className="navbar-hero-logo" />
            <h2> AI RESEARCH SYSTEM</h2>
            </div>
            <a
                href="https://github.com/vishalsorout0/Multi_agent_research_system"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
        </nav>
    );
}

export default Navbar;
