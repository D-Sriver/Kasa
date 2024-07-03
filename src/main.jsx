import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Apropos from './pages/Apropos'
import Home from './pages/Home'
import Logement from './pages/Housing'
import NotFound from './pages/NotFound'
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<Apropos />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/Housing/:id" element={<Logement />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)
