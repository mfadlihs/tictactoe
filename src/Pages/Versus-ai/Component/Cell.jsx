import { useEffect, useRef } from 'react';
import minimax from '../Algorithm/minimax';
// import oToggle from '../Algorithm/oToggle';
// import xToggle from '../Algorithm/xToggle';

export default function Cell(props) {
	const cellRef = useRef(null);
	const {
		turn,
		index,
		className,
		setTurn,
		board,
		setBoard,
		win,
		i,
		j,
		cellWin,
		sideWin,
	} = props;

	useEffect(() => {
		// const cell = cellRef.current;
		// if (win !== 0) {
		// 	cell.classList.remove('empty');
		// 	console.log(cellWinner);
		// }
		const cell = cellRef.current;
		const layer = cell.children[1];
		if (win) {
			cell.classList.remove('empty');

			cellWin.map(cellIndex => {
				if (cellIndex[0] === i && cellIndex[1] === j) {
					if (sideWin === 'o') {
						layer.classList.add('oWin');
					} else {
						layer.classList.add('xWin');
					}
				}
			});
		}

		return () => {};
	}, [win]);

	const Toggle = e => {
		const cell = cellRef.current;
		if (cell.classList.contains('empty')) {
			let boardTemp = JSON.parse(JSON.stringify(board));
			if (turn === 'x') {
				cell.classList.add('x');
				cell.classList.remove('empty');
				boardTemp[i][j] = 'x';
				setBoard(boardTemp);
				setTurn('o');
			} else {
				cell.classList.add('o');
				cell.classList.remove('empty');
				boardTemp[i][j] = 'o';
				setBoard(boardTemp);
				setTurn('x');
			}
		} else {
			return;
		}
	};

	return (
		<div onClick={Toggle} ref={cellRef} className={className}>
			<div className='index'>{index + 1}</div>
			<div className='layer'></div>
		</div>
	);
}
