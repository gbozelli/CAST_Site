import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import './components/styles/App.css';
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      {isLoading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <div style={{ paddingTop: "100px" }}>
        {/* espaço para não sobrepor o conteúdo */}
        <Outlet />
      </div>
        </>
      )}
    </>
  );
}

export default App;