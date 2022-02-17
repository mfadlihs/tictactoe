import { useEffect, useRef } from 'react';
// import oToggle from '../Algorithm/oToggle';
// import xToggle from '../Algorithm/xToggle';

export default function Cell(props) {
	const cellRef = useRef(null);
	const { turn, index, className, setTurn } = props;

	useEffect(() => {
		const cell = cellRef.current;
		cell.addEventListener('click', () => {
			if (!cell.classList.contains('empty')) {
				return;
			}
			if (turn === 1) {
				cell.classList.add('o');
				cell.classList.remove('empty');
			} else if (turn === 0) {
				cell.classList.add('x');
				cell.classList.remove('empty');
			}
		});
	}, []);

	return (
		<div
			onClick={() => {
				if (turn === 0) {
					setTurn(1);
				} else {
					setTurn(0);
				}
			}}
			ref={cellRef}
			className={className}
		>
			<div className='index'>{index + 1}</div>
			<div className='layer'></div>
		</div>
	);
}
