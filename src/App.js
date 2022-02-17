import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import VsAI from './Pages/Versus-ai/VsAI';
import Friend from './Pages/Friend/Friend';
import { createContext, useEffect, useState } from 'react';

export const sideContext = createContext();

function App() {
	const [side, setSide] = useState('');

	return (
		<>
			<div id='container'>
				<sideContext.Provider value={{ side: side, setSide: setSide }}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/friend' element={<Friend />} />
						<Route path='/vs-ai' element={<VsAI />} />
					</Routes>
				</sideContext.Provider>
			</div>
			<div className='credit'>
				<div>
					<i className='fas fa-copyright'> </i> Fadli's Project
				</div>
			</div>
		</>
	);
}

export default App;
