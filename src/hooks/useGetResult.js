import { useEffect, useMemo, useState } from "react";

const URL = "https://rickandmortyapi.com/api/character";

export function useGetResult({ pageNumber, searchTerm }) {
	const [characterList, setCharacterList] = useState();
    const filteredResult = useMemo(() => {
        if (!characterList) {
            return [];
        }

        if (!searchTerm || searchTerm.length === 0) {
            return characterList;
        }

        const regName = new RegExp(`^${searchTerm}`, 'i');

        return characterList.filter((c) => regName.test(c.name));
    }, [characterList, searchTerm]);

	useEffect(() => {
		fetch(`${URL}?page=${pageNumber}`).then(async (res) => {
			const { results } = await res.json();
			setCharacterList(results);
		});
	}, [pageNumber]);

	return filteredResult;
}
