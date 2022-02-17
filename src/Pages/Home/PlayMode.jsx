import { useNavigate } from 'react-router-dom';
import O from '../../Assets/Image/o.png';
import X from '../../Assets/Image/x.png';
import './PlayMode.css';

export default function PlayMode(props) {
	const Navigate = useNavigate();
	const WithAI = () => {
		props.setChooseSide(true);
	};

	const withFriend = () => {
		Navigate('/friend');
	};

	return (
		<div id='playmode-container'>
			<div className='xo-container'>
				<img src={X} alt='X' />
				<img src={O} alt='O' />
			</div>
			<div className='choose-container'>
				<div className='choose'>
					<p>Choose your play mode</p>
					<button onClick={WithAI} className='ai'>
						With AI
					</button>
					<button onClick={withFriend} className='friend'>
						With a Friend
					</button>
				</div>
			</div>
		</div>
	);
}
