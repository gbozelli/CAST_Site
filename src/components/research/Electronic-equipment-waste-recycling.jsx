import NavBar from "./NavBar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

function EEWR(){

  const { setSidebarContent } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/research/Electronic-equipment-waste-recycling") {
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
    <div className="title">Electronic Equipent Wast Recycling</div>
    <div className="text">Separation of valuable metals and components with high toxicity, including heavy metals and waste water treatment, including gas streams, resulting from the separation process, using conventional technologies as resources such as piro treatments and hydrothermal, in addition to advanced separation technologies by membranes and supercritical fluids.</div>
      <Outlet context={{ setSidebarContent }} />
    </div>
  )
}

export default EEWR;