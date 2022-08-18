import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import {Link , Routes, Route} from 'react-router-dom'
import WebDesign from './components/WebDesign/WebDesign'
import AppDesign from './components/AppDesign/AppDesign'
import GraphicDesign from './components/GraphicDesign/GraphicDesign'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Location from './components/Location/Location'




function App() {
  return (
		<div className="App">
			<Header />
			<div className="app__body">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/web-design" element={<WebDesign />} />
					<Route path="/app-design" element={<AppDesign />} />
					<Route path="/graphic-design" element={<GraphicDesign />} />
					<Route path="/about" element={<About />} />
					<Route path="/location" element={<Location />} />
					<Route path="/contact-us" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
