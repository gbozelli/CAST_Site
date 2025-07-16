import './styles/Add.css';

function AddNews() {
  return (

    <div className="dashboardContainer">
      <div className="dashboardTitle">Adicionar Notícia</div>

      <div className="dashboardSection">
        <input type="text" placeholder="Título da notícia" />
        <textarea placeholder="Conteúdo da notícia..." rows={5}></textarea>
        <button>Publicar Notícia</button>
      </div>
    </div>

  );
}

export default AddNews;
