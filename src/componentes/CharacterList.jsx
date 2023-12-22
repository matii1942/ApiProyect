
import { useEffect, useState /*son las variables de react*/ } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page - 1)}
      >
        Pagina: {props.page - 1}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Pagina: {props.page + 1}
      </button>
    </div>
  );
}

function Characters() {
  const [character, setcharacter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchurl() {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await respuesta.json();
      setcharacter(data.results);
    }

    fetchurl();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {character.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default Characters;