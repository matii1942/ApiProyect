import { useState, useCallback } from "react";

// eslint-disable-next-line react/prop-types
export function SearchComponent({ onConfirmSearch }) {
	const [search, setSearch] = useState("");
  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, [])

	const onSubmit = useCallback((e) => {
		e.preventDefault();
    onConfirmSearch(search)
	}, [search, onConfirmSearch]);

	return (
			<form onSubmit={onSubmit}>
				<input
					value={search}
					type="text"
					placeholder="Search"
					className="form-control"
					onChange={onChange}
				/>
			</form>
	);
}
