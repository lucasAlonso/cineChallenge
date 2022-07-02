import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

function Listado(props) {
  const [movieList, setMovieList] = useState([]);
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
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=f6dced79c19ead759680b55573a66d70&sort_by=popularity.desc";
    axios
      .get(url)
      .then((response) => {
        const apiData = response.data.results;
        setMovieList(apiData);
      })
      .catch((error) => {
        swal("Error", "Intenta mas tarde", "error");
      });
  }, [setMovieList]);

  return (
    <>
      <div className="row">
        <div className="">
          <div>{stars}</div>{" "}
        </div>
        {movieList.map((oneMovie, idx) => {
          if (
            rate[0] < oneMovie.vote_average &&
            oneMovie.vote_average < rate[1]
          ) {
            return (
              <div className="col-xs-12 col-sm-3 " key={idx}>
                <div className="card my-4">
                  <Link to={`/detalle?movieID=${oneMovie.id}`}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" +
                        oneMovie.poster_path
                      }
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
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

export default Listado;
