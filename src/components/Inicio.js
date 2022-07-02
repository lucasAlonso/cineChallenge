import Listado from "./Listado";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66f52747-13c6-4ada-b922-c429ea4a3215/d8bmnx-6849e5fa-4990-45f3-8218-7ddf24bd7980.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2ZjUyNzQ3LTEzYzYtNGFkYS1iOTIyLWM0MjllYTRhMzIxNVwvZDhibW54LTY4NDllNWZhLTQ5OTAtNDVmMy04MjE4LTdkZGYyNGJkNzk4MC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zVP8ms9zulghbR5oQPHp3vlUuKKsXkrzVyRZxpC7Pqs"
          )`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="container border border-secondary border-opacity-50 border-5 rounded-4 m-5 p-5 shadow-lg "
      >
        <div className="text-center fs-1 fw-bold font-monospace text-white m-5 p-5 ">
          <span className="text-center fs-1">CINE EL DESAFIO</span>
          <br />
        </div>
      </div>
      <div className="text-center  container mt-5">
        <Link className="btn fw-bold fs-3   " to="/busqueda">
          🔍 Encontra tu pelicula preferida !
        </Link>
      </div>
      <Listado />
    </>
  );
}

export default Inicio;
