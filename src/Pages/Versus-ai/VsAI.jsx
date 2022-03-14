import { useContext, useEffect, useRef, useState } from 'react';
import './vsai.css';
import X from '../../Assets/Image/x.png';
import O from '../../Assets/Image/o.png';
import { sideContext } from '../../App';
import Cell from './Component/Cell';
import Board from './Component/Board';

export default function VsAI() {
	/*
    0 = Player
    1 = AI
  */
	const [clicked, setClicked] = useState(0);
	const { side, setSide } = useContext(sideContext);
	const [win, setWin] = useState(false);
	const [turn, setTurn] = useState(side);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (!win) {
			if (side === turn) {
				setMessage('Your Turn');
			} else {
				setMessage('AI Turn');
			}
		} else {
			if (side === turn) {
				setMessage('AI Win');
			} else {
				setMessage('Player Win');
			}
		}
	});

	return (
		<div className='vsai-container'>
			<h1>{message}</h1>
			{/* <div className='grid'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					let classTemp = `grid-${index + 1} cell empty`;
					return (
						<Cell
							turn={turn}
							setTurn={setTurn}
							className={classTemp}
							key={index}
							index={index}
							clicked={clicked}
							setClicked={setClicked}
						/>
					);
				})}
			</div> */}
			<Board turn={turn} setTurn={setTurn} win={win} setWin={setWin} />
		</div>
	);
}
