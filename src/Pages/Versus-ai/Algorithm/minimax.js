import checkForWin from '../../Friend/Algorithm/CheckForWin';

// kudu ada cell kosong terus kasih tau

export default function minimax(Board, isMax, side) {
	if (checkForWin(Board, side) !== 0) {
		return checkForWin(Board, side);
	}

	if (isMax) {
		if (side === 'o') {
		} else {
		}
	} else {
		if (side === 'o') {
		} else {
		}
	}
}

export const BestMove = (emptyCells, arrayOfMove) => {

}


export const findEmptyCells = board => {
	let emptyCells = [];

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === '') {
				emptyCells.push([i, j]);
			}
		}
	}

	return emptyCells;
};

// export default function minimax(data, isMax, maxHeight, currentHeight, index) {
// 	if (currentHeight === maxHeight) {
// 		return data[index];
// 	}

// 	if (isMax) {
// 		return Math.max(
// 			minimax(data, false, maxHeight, currentHeight + 1, index * 2),
// 			minimax(data, false, maxHeight, currentHeight + 1, index * 2 + 1)
// 		);
// 	} else {
// 		return Math.min(
// 			minimax(data, true, maxHeight, currentHeight + 1, index * 2),
// 			minimax(data, true, maxHeight, currentHeight + 1, index * 2 + 1)
// 		);
// 	}
// }
