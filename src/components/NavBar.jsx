import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('auth') === 'true');
  }, []);

  return (
    <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        {!scrolled && <img src={'/assets/cast2.png'} alt="Logo" />}
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/research" className="nav-link">Research</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/people" className="nav-link">People</Link>
        <Link to="/about" className="nav-link">About</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Sair</button>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
