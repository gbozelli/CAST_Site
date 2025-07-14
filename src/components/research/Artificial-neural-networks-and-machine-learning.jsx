import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

function AANML(){

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
    <div className="title">Application of artificial neural networks and machine learning in life cycle assessment (LCA)</div>
    <div className="text">LCA aims to evaluate the environmental performance of a product, and thus promote its improvement through life cycle engineering and management (LCEM) techniques and tools. However, the linearities assumed in the analysis of life cycle inventory (LCI) and/or in the assessment of the life cycle impact (LCIA) can contradict or neglect important phenomena of the Biosphere, and thus, can reduce the accuracy of the application of the LCA, and reduce the effectiveness of using LCEM tool techniques. Thus, it is necessary to apply complex, non-linear, multivariate and multicriterious  mathematical models and techniques. Thus, this lines of research focuses on research aimed at the application of models and techniques of artificial neural networks and/or machine learning to support the application of LCA.</div>
      <Outlet context={{ setSidebarContent }} />
    </div>
  );
}

export default AANML;