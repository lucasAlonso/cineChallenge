import { Link } from "react-router-dom";

//Components
import Buscador from "./Buscador";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="btn fw-bold fs-3" to="/">
            CINE EL DESAFIO
          </Link>

          <Buscador />
        </div>
      </nav>
    </header>
  );
}

export default Header;
