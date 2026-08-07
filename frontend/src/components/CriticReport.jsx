import ReactMarkdown from "react-markdown";
import "../styles/card.css";

function CriticReport({ data }) {
    
    const downloadReport = () => {
      const blob = new Blob([data], { type: "text/markdown" });
    
      const url = URL.createObjectURL(blob);
    
      const a = document.createElement("a");
    
      a.href = url;
    
      a.download = "research_report.md";
    
      a.click();
    
      URL.revokeObjectURL(url);
    };
    
    const copyReport = () => {
      navigator.clipboard.writeText(data);
      alert("✔️Copied!");
    };
  return (
    <section className="section">
      <h2>Critic Report</h2>

      <div className="card markdown">
        <button className="action-btn" onClick={copyReport}>
        📋 Copy Report
        </button>

        <button className="action-btn" onClick={downloadReport}>
        ⬇️ Download
        </button>
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </section>
  );
}

export default CriticReport;