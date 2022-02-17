import PlayMode from './PlayMode';
import PickSide from './PickSide';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
	const [chooseSide, setChooseSide] = useState(false);

	return (
		<>
			{chooseSide ? <PickSide /> : <PlayMode setChooseSide={setChooseSide} />}
		</>
	);
}
