import { useContext, useEffect, useRef, useState } from 'react';
import './vsai.css';
import X from '../../Assets/Image/x.png';
import O from '../../Assets/Image/o.png';
import { sideContext } from '../../App';
import Cell from './Component/Cell';

export default function VsAI() {
	/*
    0 = Player
    1 = AI
  */
	const [turn, setTurn] = useState(0);
	const { side, setSide } = useContext(sideContext);

	// const xToggle = node => {
	// 	node.classList.add('x');
	// 	node.classList.remove('empty');
	// 	setTurn(!turn);
	// };

	// const oToggle = node => {
	// 	node.classList.add('o');
	// 	node.classList.remove('empty');
	// 	setTurn(!turn);
	// };

	// const toggleCell = (node, turn) => {
	// 	if (turn) {
	// 		xToggle(node);
	// 	} else {
	// 		oToggle(node);
	// 	}
	// };

	useEffect(() => {
		// cellRef.forEach((ref, index) => {
		// 	let node = ref.current;
		// 	if (node.classList.contains('empty')) {
		// 		if (turn) {
		// 			node.addEventListener('click', addXClass.bind(node, turn));
		// 		} else {
		// 			node.addEventListener('click', addOClass(node, turn));
		// 		}
		// 	}
		// });
		console.log(turn);

		return () => {};
	}, [turn]);

	return (
		<div className='vsai-container'>
			{turn === 0 ? <h1>Your Turn</h1> : <h1>Ai Turn</h1>}
			<div className='grid'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					let classTemp = `grid-${index + 1} cell empty`;
					return (
						// <div className={classTemp} key={index}>
						// 	<div className='index'>{index + 1}</div>
						// 	<div className='layer'></div>
						// </div>
						<Cell
							turn={turn}
							setTurn={setTurn}
							className={classTemp}
							key={index}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
