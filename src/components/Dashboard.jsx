import './styles/Research.css';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom";


function Research() {

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default Research;
