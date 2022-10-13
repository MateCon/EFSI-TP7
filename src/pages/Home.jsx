import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { useState, useEffect } from "react";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductos(data.products.slice(0, 5));
    })()
  }, []);

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/slider.png" className="d-block w-100" alt="slider image" />
          </div>
          <div className="carousel-item">
            <img src="../img/slider.png" className="d-block w-100" alt="slider image" />
          </div>
          <div className="carousel-item">
            <img src="../img/slider.png" className="d-block w-100" alt="slider image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="mx-auto w-[95%] md:w-[750px]">
        <h2 className="text-2xl font-semibold mb-4">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
          {productos.map((producto, index) => <Card key={index} {...producto} />)}
        </div>
      </section>
      <section className="border-t-4 border-[#71a7ab] mt-14 mx-auto w-[95%] md:w-[800px]">
        <h2 className="text-2xl font-semibold my-4">Marcas con las que trabajamos</h2>
        <div className="flex flex-wrap justify-center gap-8 w-full h-[35px] sm:g-[55px]">
          <img className="h-full" src="../img/ferrum.png" alt="" />
          <img className="h-full" src="../img/delta.png" alt="" />
          <img className="h-full" src="../img/Logo-Negativo.png" alt="" />
          <img className="h-full" src="../img/logo_ips.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
