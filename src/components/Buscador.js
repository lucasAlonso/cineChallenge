import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Buscador(props) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      MySwal.fire("Error", "Escribe una palabra clave", "error");
    } else if (keyword.length < 3) {
      MySwal.fire("Error", "Escribe mas de 4 caracteres", "error");
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?keyword=${keyword}`, { replace: true });
    }
  };

  return (
    <form className="d-flex align-item-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="Buscar..."
        />
      </label>

      <button className="btn btn-success ml-2" type="submit">
        Buscar
      </button>
    </form>
  );
}
export default Buscador;
