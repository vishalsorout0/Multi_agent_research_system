import { useState } from "react";
import "../styles/card.css";

function ScrapedContent({ data }) {
    const [open, setOpen] = useState(false);
    return (
        <section className="section">
      <h2>Scraped Content</h2>

        <button
        className="action-btn"
        onClick={() => setOpen(!open)}
        >
        {open ? "📖 Hide Content" : "📂 Show Content"}
        </button>
        {open && (
        <div className="card scraped-card">
            <pre>{data}</pre>
        </div>
        )}
    </section>
  );
}




export default ScrapedContent;