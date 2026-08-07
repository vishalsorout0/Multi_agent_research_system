import { Globe, FileText, Briefcase, ShieldCheck } from "lucide-react";
import "../styles/pipeline.css";

const steps = [
  {
    num: "01",
    icon: <Globe size={20} />,
    title: "Search Agent",
    desc: "Queries the live web and ranks the most relevant, trustworthy sources for your topic.",
  },
  {
    num: "02",
    icon: <FileText size={20} />,
    title: "Scraper Agent",
    desc: "Extracts the full readable content from each source, stripping noise and boilerplate.",
  },
  {
    num: "03",
    icon: <Briefcase size={20} />,
    title: "Report Agent",
    desc: "Synthesises everything into a structured Markdown report with sections and citations.",
  },
  {
    num: "04",
    icon: <ShieldCheck size={20} />,
    title: "Critic Agent",
    desc: "Audits the report for gaps and bias, then scores strengths, weaknesses and a verdict.",
  },
];

function Pipeline() {
  return (
    <section className="pipeline-main">
      <p className="pipeline-text">PIPELINE</p>
      <h2>How the agents work together</h2>
      <p className="descen">
        Each agent owns one stage of the research loop and hands its output to the next.
      </p>

      <div className="cards">
        {steps.map((step) => (
          <div className="card" key={step.num}>
            <div className="icon">{step.icon}</div>
            <span>{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pipeline;