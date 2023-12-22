function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h4>{character.name}</h4>
      <div>
        <img className="img-fluid rounded-pill " src={character.image} alt={Character.name} />
        <p>Estatus: {character.status}</p>
        <p>Especie: {character.species}</p>
        <p>Genero: {character.gender}</p>
        <p>Lugar: {character.origin.name}</p>
      </div>
    </div>
  );
}

export default Character;
