import { useState } from 'react';
import axios from 'axios';
import './styles/Add.css';

function AddResearch() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [department, setDepartment] = useState('');
  const [authors, setAuthors] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3001/add-research', {
        title,
        content,
        department,
        authors
      });
      alert(res.data.message); // feedback simples
      setTitle('');
      setContent('');
      setDepartment('');
      setAuthors('');

    } catch (err) {
      alert('Erro ao salvar notícia');
    }
  };

  return (
    <div className="dashboardContainer">
      <div className="dashboardTitle">Adicionar Pesquisa</div>

      <div className="dashboardSection">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo da notícia"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit}>Publicar Notícia</button>
      </div>
    </div>
  );
}

export default AddResearch;
