
import CharacterList from "./componentes/CharacterList";
import Character from "./componentes/Character";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-3 py-3">Rick and Morty App</h1>
      <CharacterList />
    </div>
  );
}

export default App;