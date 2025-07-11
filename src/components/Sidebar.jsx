
import { Link } from "react-router-dom";
import "./styles/Sidebar.css";

function Sidebar({ links }) {
  return (
    <div className="sidebar">
      <h3>Content</h3>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.to ? (
              <Link to={item.to}>{item.text}</Link>
            ) : (
              <a href={item.href}>{item.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
