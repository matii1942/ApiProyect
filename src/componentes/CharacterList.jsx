import Character from "./Character";

export function CharacterList({ characterList }) {
	return (
		<div className="container">
			<div className="row">
				{!characterList ? (
					<div className="d-flex justify-content-center">
						<div
							className="spinner-border text-danger"
							role="status"
						>
							<span className="visible-hidden"></span>
						</div>
					</div>
				) : (
					characterList.map((character) => (
						<div className="col-md-4" key={character.id}>
							<Character character={character} />
						</div>
					))
				)}
			</div>
		</div>
	);
}
