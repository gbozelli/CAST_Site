import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import './components/styles/App.css';
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [sidebarContent, setSidebarContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //const allProducts = await Promise.all(products.map((id) => getData(id)));
      // Inicializa a propriedade `sells` como 0 para cada produto
      //const productsWithSells = allProducts.map((product) => ({
      //  ...product,
      //  sells: 0,
      //}));
      //setProduct(productsWithSells);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
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
      {isLoading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="main">
          <NavBar />
            <div className="content" style={{ paddingTop: "100px" }}>
              <Sidebar links={sidebarContent} />
               
              <Outlet context={{ setSidebarContent }}/>
              </div>
        </div>
      )}
    </>
  );
}

export default App;