import { Link, Outlet } from "react-router-dom";
import './styles/Research.css';
import Sidebar from "./Sidebar";
function Research() {
  const links = [
    { text: "People", to: "/people" },
    { text: "About us", to: "/about" },
  ];

  return (
    <>
      <Sidebar links={links} />
      <Outlet />
    </>
  );
}

export default Research;
