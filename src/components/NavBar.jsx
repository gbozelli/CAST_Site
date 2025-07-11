import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/NavBar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        {!scrolled && <img src={'/assets/cast2.png'} alt="Logo" />}
      </div>
      <div className="nav-links">
        <Link to="" className="nav-link">Home</Link>
        <Link to="research" className="nav-link">Research</Link>
        <Link to="news" className="nav-link">News</Link>
        <Link to="people" className="nav-link">People</Link>
        <Link to="about" className="nav-link">About</Link>
      </div>
    </div>
  );
}

export default NavBar;
