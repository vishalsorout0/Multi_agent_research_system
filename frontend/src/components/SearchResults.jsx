import "../styles/card.css";

function SearchResults({ data }) {
  return (
    <section className="section">
      <h2>Search Results</h2>

      {data.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>

          <p>{item.snippet}</p>

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit Source
          </a>
        </div>
      ))}
    </section>
  );
}

export default SearchResults;