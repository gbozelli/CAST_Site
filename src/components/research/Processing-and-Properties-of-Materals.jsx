import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

function PPM(){

  const { setSidebarContent } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/research/Artificial-neural-networks-and-machine-learning") {
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
       <div className="title">Processing and Properties of Materials</div>
       <div className="text">In order to comply with the protocols and agreements that advocate the sustainable use of the raw material available in nature, an engineer when designing a structure or device must have a holistic view when choosing the most suitable material that meets project requirements. Any and all material properties depend on the final arrangement of the phases that make up microstructure, and this is strongly sensitive to processing variables. Therefore, the focus of this line will be the development of materials and processes that concatenate design + material selection + processing + properties + use + disposal + reuse</div>
    </div>
  );
}

export default PPM;