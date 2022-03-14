export default function checkForWin(board, side) {
	/*
    10 = Win by AI
    0 = Draw
    -10 = Win by Player
  */

	// Horizontal Win
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] === board[i][1] &&
			board[i][1] === board[i][2] &&
			board[i][0] !== ''
		) {
			if (board[i][0] === side) {
				return -10;
			} else {
				return 10;
			}
		}
	}

	// Vertical Win
	for (let i = 0; i < 3; i++) {
		if (
			board[0][i] === board[1][i] &&
			board[1][i] === board[2][i] &&
			board[0][i] !== ''
		) {
			if (board[0][i] === side) {
				return -10;
			} else {
				return 10;
			}
		}
	}

	// Diagonal
	if (
		board[0][0] === board[1][1] &&
		board[1][1] === board[2][2] &&
		board[0][0] !== ''
	) {
		if (board[0][0] === side) {
			return -10;
		} else {
			return 10;
		}
	}

	if (
		board[0][2] === board[1][1] &&
		board[1][1] === board[2][0] &&
		board[1][1] !== ''
	) {
		if (board[1][1] === side) {
			return -10;
		} else {
			return 10;
		}
	}

	return 0;
}
