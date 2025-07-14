import './styles/Research.css';
import { useEffect } from "react";
import { useOutletContext, Outlet, useLocation } from "react-router-dom";

function Research() {
  const { setSidebarContent } = useOutletContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/research") {
      setSidebarContent([
        { text: "Home", href: "/" },
        { text: "About us", href: "/about" },
        { text: "People", href: "/people" },
        { text: "Research", href: "/research" },
      ]);
    }
  }, [location.pathname]); 

  return (
    <>
      <Outlet context={{ setSidebarContent }} />
    </>
  );
}

export default Research;
