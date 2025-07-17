import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './research/styles/General.css'; // reutilize o CSS dos cards

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/news-by-id/${id}`)
      .then((response) => setNews(response.data))
      .catch((error) => console.error("Erro ao buscar notícia:", error));
  }, [id]);

  if (!news) {
    return (
      <div className="loading">
        <div className="spinner" />
        Carregando notícia...
      </div>
    );
  }

  return (
    <div className="textContent">
      <div className="title" style={{ maxWidth: '800px' }}>{news.title}</div>
        <div style={{ color: '#666', fontSize: '14px' }}>{news.created_at?.slice(0, 10)}</div>
        <div className="text" style={{ marginTop: '15px' }}>{news.content}</div>

    </div>
  );
}

export default NewsDetail;
