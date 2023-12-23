import { useState } from "react";
import { CharacterList } from "./componentes/CharacterList";
import { SearchComponent } from "./componentes/SearchComponents";
import { NavPage } from "./componentes/NavPage";
import { useChangePage } from "./hooks/useChangePage";
import { useGetResult } from "./hooks/useGetResult";

function App() {
	const [term, setTerm] = useState();
	const { page, moveToNext, moveToPrev } = useChangePage();
	const result = useGetResult({ pageNumber: page, searchTerm: term });

	return (
		<div className="container">
			<div className="bg-success text-white">
				<h1 className="text-center display-3 py-3">
					Rick and Morty App
				</h1>
			</div>
			<SearchComponent
				onConfirmSearch={(searchTerm) => setTerm(searchTerm)}
			/>
			<div className="container">
				<NavPage movePrevPage={moveToPrev} moveNextPage={moveToNext} />

				<CharacterList characterList={result} />
			</div>
		</div>
	);
}

export default App;
