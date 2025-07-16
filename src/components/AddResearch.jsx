import './styles/Add.css';

function AddResearch() {
  return (

    <div className="dashboardContainer">
      <div className="dashboardTitle">Adicionar Pesquisa</div>

      <div className="dashboardSection">
        <input type="text" placeholder="Título da pesquisa" />
        <input type="text" placeholder="Autores" />
        <input type="text" placeholder="Descrição" />
        <select>
          <option value="">Selecione o Departamento</option>
          <option value="LCE">LCE</option>
          <option value="ML">Machine Learning</option>
          <option value="Materials">Materials</option>
        </select>
        <button>Salvar Pesquisa</button>
      </div>
    </div>

  );
}

export default AddResearch;
