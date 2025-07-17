import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/Research.css';
import axios from "axios";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/all-news")
      .then((response) => {
        setNewsList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar notícias:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        Carregando notícias...
      </div>
    );
  }

  return (
    <div className="research-container">
      <div className="grid">
        {newsList.map((news) => (
          <Link
            key={news.id}
            to={`/news/${news.id}`}
            className="card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="nav-link">{news.title}</div>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {news.created_at?.slice(0, 10)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;
