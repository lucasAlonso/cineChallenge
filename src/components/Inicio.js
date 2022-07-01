import Listado from "./Listado";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            "https://media.istockphoto.com/photos/pop-corn-full-frame-detailed-view-from-above-top-view-picture-id1127348662?k=20&m=1127348662&s=612x612&w=0&h=EpdUqyE5JBwY4F2B2WDVPmARnlDFKSnT-mWvj2KWnEE="
          )`,
        }}
        className="container border border-secondary border-opacity-50 border-5 rounded-4 m-5 p-3 shadow-lg "
      >
        <div className="text-center fs-1 fw-bold font-monospace">
          <span className="text-center fs-1">CINE EL DESAFIO</span>
          <br />
          <span className="text-center  fw-bold text-secondary fs-3">
            Bienvenides al mejor cine del mundo
          </span>
        </div>
      </div>
      <div className="text-center  container ">
        <Link className="btn fw-bold fs-3" to="/busqueda">
          Encontra tu pelicula preferida!
        </Link>
      </div>
      <Listado />
    </>
  );
}

export default Inicio;
