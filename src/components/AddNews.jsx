import { useState } from 'react';
import axios from 'axios';
import './styles/Add.css';

function AddNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3001/add-news', {
        title,
        content,

      });
      alert(res.data.message); // feedback simples
      setTitle('');
      setContent('');

    } catch (err) {
      alert('Erro ao salvar notícia');
    }
  };

  return (
    <div className="dashboardContainer">
      <div className="dashboardTitle">Adicionar Notícia</div>

      <div className="dashboardSection">
        <input
          type="text"
          placeholder="Título da notícia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo da notícia..."
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit}>Publicar Notícia</button>
      </div>
    </div>
  );
}

export default AddNews;
