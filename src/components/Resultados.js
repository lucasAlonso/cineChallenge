import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "./Header";

function Resultados(props) {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  let location = useLocation();
  const [moviesResult, setMoviesResult] = useState([]);
  const MySwal = withReactContent(Swal);
  const defaultStars = [false, false, false, false, false];
  const [clicked, setClicked] = useState(defaultStars);
  const [rate, setRate] = useState([0, 10]);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    if (
      (clicked[index] === true && clicked[index + 1] === false) ||
      (clicked[index] === true && index === 4)
    ) {
      setClicked(defaultStars);
      setRate([0, 10]);
    } else {
      for (let i = 0; i < 5; i++) {
        if (i <= index) clickStates[i] = true;
        else clickStates[i] = false;
      }
      setClicked(clickStates);
      if (clickStates[0] === true) setRate([0, 2]);
      if (clickStates[1] === true) setRate([2, 4]);
      if (clickStates[2] === true) setRate([4, 6]);
      if (clickStates[3] === true) setRate([6, 8]);
      if (clickStates[4] === true) setRate([8, 10]);
    }
  };
  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(
      <span
        key={index}
        onClick={(e) => handleStarClick(e, index)}
        className={"btn fw-bold fs-3" + (clicked[index] ? " text-warning" : "")}
      >
        ☆
      </span>
    );
  }

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=f6dced79c19ead759680b55573a66d70&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const queryResult = response.data.results;
        if (queryResult.length === 0) {
          MySwal.fire("Error", "No hubo resultados", "error");
        }
        setMoviesResult(queryResult);
      })
      .catch((error) => {
        MySwal.fire("Error", "Intenta mas tarde", "error");
      });
  }, [keyword, location, MySwal]);

  return (
    <>
      <Header />
      <Link
        to={`/busqueda`}
        className="btn btn-secondary fw-bold fs-3 flex mb-5"
      >
        Nueva Busqueda
      </Link>
      <h2>Buscaste: {keyword}</h2>
      <div className="">
        <div>{stars}</div>{" "}
      </div>
      {moviesResult.length === 0 && <h3>No hay resultados</h3>}
      <div className="row">
        {moviesResult.map((oneMovie, idx) => {
          if (
            rate[0] < oneMovie.vote_average &&
            oneMovie.vote_average < rate[1]
          ) {
            return (
              <div className="col-xs-12 col-sm-3" key={idx}>
                <div className="card my-4">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + oneMovie.poster_path
                    }
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">
                      {oneMovie.title.substring(0, 30)}
                    </h5>
                    <p className="card-text">
                      {oneMovie.overview.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/detalle?movieID=${oneMovie.id}`}
                      className="btn btn-primary"
                    >
                      View detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </>
  );
}
export default Resultados;
