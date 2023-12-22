import CharacterList from "./componentes/CharacterList";
import SearchComponent from "./componentes/SearchComponents";



function App() {
  return (
    <div className="bg-success text-white">
      <h1 className="text-center display-3 py-3">Rick and Morty App</h1>
      <SearchComponent/>
      <CharacterList />
    </div>
  );
}

export default App;