import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";
import './styles/General.css'

function LCE(){

  const { setSidebarContent } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/research/Life-Cycle-Engineering") {
    setSidebarContent([
    { text: "Machine Learning", to: "/research/Artificial-neural-networks-and-machine-learning" },
    { text: "LCE", to: "/research/Life-Cycle-Engineering" },
    { text: "Battery recycling", to: "/research/Lithium-ion-batteries-recycling" },
    { text: "Eletronic recycling", to: "/research/Electronic-equipment-waste-recycling" },
    { text: "Optical Communications", to: "/research/Optical-Communications" },
    { text: "Materials", to: "/research/Processing-and-Properties-of-Materials" }
  ]);
  }}, [location.pathname]);

  return (
    <>
    <Outlet context={{ setSidebarContent }} />
    <div className="textContent">
      
      <div className="title">Life Cycle Engineering</div>
      <div className="text">Based on results on the environmental performance of a product or process, usually obtained through Lice Cycle Assessment (LCA), this line focuses on the application of Life Cycle Engineering (LCE) techniques and tools for the prevention and/or minimization of environmental impacts throughout life cycle of the technological product. There are several ECV techniques and tools, highlighting the concept of Design for X, in particular Design for Environment (Ecodesign), Design for Circularity, Design for Recycling, among others, the Cleaner Production (CP) in the manufacturing stage, and end of life (EoL) strategies, especially recycling.</div>
       

    </div>
    </>
    
  );
}

export default LCE;