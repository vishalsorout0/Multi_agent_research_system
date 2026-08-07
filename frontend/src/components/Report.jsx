import ReactMarkdown from "react-markdown";
import "../styles/card.css";
import jsPDF from "jspdf";

function Report({ data }) {

    const downloadReport = () => {
      const doc = new jsPDF();

      const lines = doc.splitTextToSize(data, 180);

      doc.text(lines, 10, 10);

      doc.save("research_report.pdf");
    };
    
    const copyReport = () => {
      navigator.clipboard.writeText(data);
      alert("✔️Copied!");
    };
  return (
    <section className="section">
      <h2>Research Report</h2>

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


export default Report;