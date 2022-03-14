import { useContext, useEffect, useState } from 'react';
import { sideContext } from '../../../App';
import checkForWin from '../Algorithm/CheckForWin';
import { findEmptyCells } from '../Algorithm/minimax';
import WinnerCell from '../Algorithm/WinnerCell';
import Cell from './Cell';

export default function Board(props) {
	const [board, setBoard] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	]);
	const { side, setSide } = useContext(sideContext);
	const [sideWin, setSideWin] = useState('');
	const { turn, setTurn, win, setWin } = props;
	// const [win, setWin] = useState(false);
	const [cellWin, setCellWin] = useState([]);
	let messageTemp = side === turn ? 'Your Turn' : 'AI Turn';

	useEffect(() => {
		if (checkForWin(board, side) !== 0) {
			const winner = checkForWin(board, side);
			let sideWin;
			if (winner === -10) {
				sideWin = side;
			} else {
				if (side === 'x') {
					sideWin = 'o';
				} else if (side === 'o') {
					sideWin = 'x';
				}
			}
			setSideWin(sideWin);
			setWin(true);
			console.log(WinnerCell(board, sideWin));
			setCellWin(WinnerCell(board, sideWin));
		}
	}, [board]);

	return (
		<div className='grid'>
			{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => {
				let classTemp = `grid-${index + 1} cell empty`;
				return (
					<Cell
						turn={turn}
						setTurn={setTurn}
						i={Math.floor(index / 3)}
						j={index % 3}
						className={classTemp}
						key={index}
						index={index}
						board={board}
						setBoard={setBoard}
						side={side}
						win={win}
						sideWin={sideWin}
						cellWin={cellWin}
					/>
				);
			})}
		</div>
	);
}
