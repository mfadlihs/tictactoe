import { API } from '../Config/api';
import axios from 'axios';
import { useEffect } from 'react';

export default function Tes() {
	const cobaFetch = async function () {
		const req = API.post('/admin/login');
		req.then(e => console.log(e.data));
	};

	useEffect(() => {
		cobaFetch();
	}, []);

	return <div>ini halaman tes</div>;
}
