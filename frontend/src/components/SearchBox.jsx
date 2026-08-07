import { useState } from "react";
import api from "../services/api";
import "../styles/search.css";

function SearchBox({ setLoading, setResult }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const res = await api.post("/research", {
        query,
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Research failed. (wait 1-2 minutes for starting backend)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter your research topic..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Research
      </button>
    </div>
  );
}

export default SearchBox;