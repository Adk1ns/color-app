import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CSS from './Components/CSS'
import MainPage from './Components/MainPage'
import MySwatches from './Components/MySwatches'
import UserContext from './Context/user-context'
import { useState } from 'react'
import AppHeaderStyle from './AppHeaderStyle'

//FONTS: Akaya Telivigala, Luckiest Guy, Permanent Marker, Redressed, Dancing Script,
// Praise, Great Vibes, Merienda, Tangerine
//IDEA: Add merch page later, stripe payments? 3rd QTR project
//IDEA: google ads, 3rd QTR
//IDEA: simple ads, links
//IDEA: CSS page

function App(props) {
	const [mySwatches, setMySwatches] = useState([
		{
			name: 'swatch force one',
			id: 106670,
			colors: [
				{
					id: 1,
					color: '#19b582',
					swatch: 'one',
				},
				{
					id: 2,
					color: '#1783bd',
					swatch: 'one',
				},
				{
					id: 3,
					color: '#fbde06',
					swatch: 'one',
				},
				{
					id: 4,
					color: '#8b9898',
					swatch: 'one',
				},
				{
					id: 5,
					color: '#355670',
					swatch: 'one',
				},
			],
		},
		{
			name: 'swatch force two',
			id: 299,
			colors: [
				{
					id: 1,
					color: '#ef476f',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#ffd166',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#06d6a0',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#118ab2',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#073b4c',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Swatch Awesome',
			id: 292,
			colors: [
				{
					id: 1,
					color: '#011627',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#fdfffc',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#2ec4b6',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#e71d36',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#ff9f1c',
					swatch: 'two',
				},
			],
		},
	])

	return (
		<UserContext.Provider
			value={{
				fuck: true,
			}}>
			<AppHeaderStyle>
				<header className='App-header'>
					<div className='row fit'>
						<div className='col-7 m-3 mb-2'>
							<h1 className='header-main Merienda'>ColorSwatch.com</h1>
							<h2 className='Tangerine'>Color solutions for your website</h2>
						</div>
						<div className='col-4 d-flex align-items-end justify-content-end m-3 mb-2'>
							<nav className='p-3'>
								<Link to='/' className='p-2 Merienda Nav-Text'>
									Home
								</Link>
								<Link to='/MySwatches' className='p-2 Merienda Nav-Text'>
									Myswatches
								</Link>
								<Link to='/CSS' className='p-2 Merienda Nav-Text'>
									Merch
								</Link>
								<Link to='/MySwatches' className='p-2 Merienda Nav-Text'>
									Log In/Out
								</Link>
							</nav>
						</div>
					</div>
				</header>
				<main>
					<Routes>
						<Route
							path='/'
							element={
								<MainPage
									mySwatches={mySwatches}
									setMySwatches={setMySwatches}
								/>
							}
						/>
						<Route path='css' element={<CSS />} />
						<Route
							path='MySwatches'
							element={
								<MySwatches
									mySwatches={mySwatches}
									setMySwatches={setMySwatches}
								/>
							}
						/>
						<Route path='share' element={<p>donate?</p>} />
					</Routes>
				</main>
				<footer className='footer text-center'>
					<p className='Merienda pt-3 mb-0'>ColorSwatch.com</p>
					<p>2022</p>
				</footer>
			</AppHeaderStyle>
		</UserContext.Provider>
	)
}

export default App
