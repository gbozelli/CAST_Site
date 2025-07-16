import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';
import NavBar from './NavBar';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <> 
    <div className="dashboardContainer">
      <div className="dashboardTitle">Painel do Professor</div>

      <div className="dashboardSection">
        <button onClick={() => navigate('/dashboard/add-research')}>Adicionar Pesquisa</button>
        <button onClick={() => navigate('/dashboard/add-news')}>Adicionar Notícia</button>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
