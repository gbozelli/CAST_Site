import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

function OC(){

  const { setSidebarContent } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/research/Optical-Communications") {
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
    <div className="textContent">
       <Outlet context={{ setSidebarContent }} />
       <div className="title">Optical Communications</div>
       <div className="text">Analyze the environmental performance of optical networks and technologies in use to identify the mais factors that cause environmental impacts, proposing technologies for their reduction, Develop an optical network design methodology that includes environmental impact along with performance metrics.</div>
    </div>
  );
}

export default OC;