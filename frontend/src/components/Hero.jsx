import heroImage from "../assets/hero.jpg";
import "../styles/hero.css";

function Hero(){
    return(
        <>
            <section className="hero">
    <div className="hero-text">
        <h1>Multi-Agent AI Research System</h1>
        <p>
            Enter any topic and the system searches the live web, scrapes trusted sources, synthesises a structured AI report, then runs a critic pass that scores and challenges its own findings.        
        </p>
    </div>

    <img src={heroImage} className="hero-logo" alt="AI Logo" />

    </section>
    </>
    );
}

export default Hero;

