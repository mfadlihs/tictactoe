import checkForWin from './CheckForWin';

export default function WinnerCell(board, side) {
	const conditionBoard = condition(board, side);

	if (conditionBoard[0] === 1) {
		const i = conditionBoard[1];
		return [
			[i, 0],
			[i, 1],
			[i, 2],
		];
	} else if (conditionBoard[0] === 2) {
		const j = conditionBoard[1];
		return [
			[0, j],
			[1, j],
			[2, j],
		];
	} else {
		if (conditionBoard[1] === 1) {
			return [
				[0, 0],
				[1, 1],
				[2, 2],
			];
		} else {
			return [
				[0, 2],
				[1, 1],
				[2, 0],
			];
		}
	}
}

function condition(board, side) {
	/*
    condition : 
    1 = horizontal
    2 = vertikal
    3 = diagonal
  */

	// Horizontal Win
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] === board[i][1] &&
			board[i][1] === board[i][2] &&
			board[i][0] === side
		) {
			return [1, i];
		}
	}

	// Vertical Win
	for (let i = 0; i < 3; i++) {
		if (
			board[0][i] === board[1][i] &&
			board[1][i] === board[2][i] &&
			board[0][i] === side
		) {
			return [2, i];
		}
	}

	// Diagonal
	if (
		board[0][0] === board[1][1] &&
		board[1][1] === board[2][2] &&
		board[0][0] === side
	) {
		return [3, 1];
	}

	if (
		board[0][2] === board[1][1] &&
		board[1][1] === board[2][0] &&
		board[1][1] !== ''
	) {
		return [3, 2];
	}
}
