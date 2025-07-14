import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

function LIBR(){

  const { setSidebarContent } = useOutletContext();

  useEffect(() => {
    if (location.pathname === "/research/Lithium-ion-batteries-recycling") {
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
       <div className="title">Lithium-ion Battery Recycling</div>
       <div className="text">Obataining cathodic and anodic materials for lithium ion batteries by recycling discarded batteries; Reuse of residual energy from discarded lithium ion batteries; use of transition metal complexes in the recovery of valuable metals and in the treatment of residues from the recycling of lithium ion batteries.</div>
    </div>
  );
}

export default LIBR;