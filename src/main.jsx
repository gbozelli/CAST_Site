import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import News from "./components/News";
import People from "./components/People";
import Research from "./components/Research";
import About from "./components/About";
import LCE from "./components/research/Life-Cycle-Engineering"
import OC from "./components/research/Optical-Communications"
import LIBR from "./components/research/Lithium-ion-batteries-recycling"
import ANNML from "./components/research/Artificial-neural-networks-and-machine-learning"
import EEWR from "./components/research/Electronic-equipment-waste-recycling"
import PPM from "./components/research/Processing-and-Properties-of-Materals"
import Home from "./components/Home"
import ResearchCards from "./components/research/ResearchCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <- AQUI USAMOS O LAYOUT GERAL
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />, // <- ESSA É A PÁGINA "HOME" DENTRO DO LAYOUT
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "research",
        element: <Research />,
        children: [
          {
            index: true, 
            element: <ResearchCards />,
          },
          {
            path: "Life-Cycle-Engineering",
            element: <LCE />,
          },
          {
            path: "Artificial-neural-networks-and-machine-learning",
            element: <ANNML />,
          },
          {
            path: "Optical-Communications",
            element: <OC />,
          },
          {
            path: "Lithium-ion-batteries-recycling",
            element: <LIBR />,
          },
          {
            path: "Electronic-equipment-waste-recycling",
            element: <EEWR />,
          },
          {
            path: "Processing-and-Properties-of-Materials",
            element: <PPM />,
          },
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);