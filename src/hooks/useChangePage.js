import { useCallback, useState } from "react";

export function useChangePage() {
	const [page, setPage] = useState(1);

	const moveToNext = useCallback(() => {
		setPage((prev) => prev + 1);
	}, []);

	const moveToPrev = useCallback(() => {
		setPage((prev) => {
			const newState = prev - 1;

			if (newState <= 0) {
				return prev;
			}

			return newState;
		});
	}, []);

	return {
		page,
		moveToNext,
        moveToPrev,
	};
}
