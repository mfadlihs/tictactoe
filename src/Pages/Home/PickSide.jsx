import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import O from '../../Assets/Image/o.png';
import X from '../../Assets/Image/x.png';
import './PickSide.css';
import { sideContext } from '../../App';

export default function PickSide() {
	const xRef = useRef(null);
	const oRef = useRef(null);
	const Navigate = useNavigate();
	const { setSide } = useContext(sideContext);

	useEffect(() => {
		const xSide = xRef.current;
		const oSide = oRef.current;

		xSide.addEventListener('click', () => {
			if (!oSide.classList.contains('klik')) {
				xSide.classList.toggle('klik');
			} else {
				xSide.classList.toggle('klik');
				oSide.classList.toggle('klik');
			}
			if (xSide.classList.contains('klik')) {
				setSide('x');
				Navigate('/vs-ai');
			}
		});
		oSide.addEventListener('click', () => {
			if (!xSide.classList.contains('klik')) {
				oSide.classList.toggle('klik');
			} else {
				xSide.classList.toggle('klik');
				oSide.classList.toggle('klik');
			}
			if (oSide.classList.contains('klik')) {
				setSide('o');
				Navigate('/vs-ai');
			}
		});
	}, []);

	return (
		<div id='pickSide'>
			<p>Pick Your Side : </p>
			<div className='side-container'>
				<div ref={xRef} className='x-container'>
					<img src={X} alt='X' />
					<div className='x-button'>
						<div className='module'>
							<div className='button'></div>
						</div>
					</div>
				</div>
				<div ref={oRef} className='o-container'>
					<img src={O} alt='O' />
					<div className='o-button'>
						<div className='module'>
							<div className='button'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
