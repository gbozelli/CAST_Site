// components/research/ResearchCards.jsx
import { Link } from "react-router-dom";
import "../styles/Research.css";

function ResearchCards() {
  return (
    <div className="research-container">
      <div className="grid">
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Life Cycle Engineering" />
          <Link to="Life-Cycle-Engineering" className="nav-link">Life Cycle Engineering</Link>
        </div>
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Lithium ion batteries recycling" />
          <Link to="Lithium-ion-batteries-recycling" className="nav-link">Lithium ion batteries recycling</Link>
        </div>
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Electronic equipment waste recycling" />
          <Link to="Electronic-equipment-waste-recycling" className="nav-link">Electronic equipment waste recycling</Link>
        </div>
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Optical Communications" />
          <Link to="Optical-Communications" className="nav-link">Optical Communications</Link>
        </div>
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Processing and Properties of Materials" />
          <Link to="Processing-and-Properties-of-Materials" className="nav-link">Processing and Properties of Materials</Link>
        </div>
        <div className="card">
          <img src={"https://picsum.photos/300/200"} alt="Artificial Neural Networks and Machine Learning" />
          <Link to="Artificial-neural-networks-and-machine-learning" className="nav-link">
            ANN & ML in Life Cycle Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchCards;
