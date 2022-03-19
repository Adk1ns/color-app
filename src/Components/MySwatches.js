import React from 'react'
import { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwatchPicker from './MySwatches/SwatchPicker'
import MySwatch from './MySwatches/MySwatch'
import UserContext from '../Context/user-context'

const MySwatches = ({ mySwatches, setMySwatches }) => {
	const ctx = useContext(UserContext)
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [swatchPickerOpen, setSwatchPickerOpen] = useState(true)
	const [colorsInSwatch, setColorsInSwatch] = useState([])

	const logInOut = () => {
		setIsLoggedIn(!isLoggedIn)
	}
	const togglePicker = () => {
		setSwatchPickerOpen(!swatchPickerOpen)
	}

	return (
		<UserContext.Consumer>
			{(ctx) => {
				return (
					<div className='Merienda'>
						{isLoggedIn && (
							<>
								{swatchPickerOpen && (
									<SwatchPicker
										setMySwatches={setMySwatches}
										mySwatches={mySwatches}
										colorsInSwatch={colorsInSwatch}
										setColorsInSwatch={setColorsInSwatch}
									/>
								)}
								<h1 className='text-center pt-3'>My Color Swatch Collection</h1>
								<div className='d-flex flex-wrap'>
									<div className='d-flex align-items-center justify-content-around flex-wrap'>
										{mySwatches.map((swatch, index) => (
											<MySwatch
												swatch={swatch}
												key={index}
												mySwatches={mySwatches}
												setMySwatches={setMySwatches}
												setColorsInSwatch={setColorsInSwatch}
											/>
										))}
									</div>
								</div>
								<h4 className='text-center mt-5'>
									Upgrade your account to get more swatches
								</h4>
							</>
						)}
						{!isLoggedIn && (
							<div>
								<h1>Please log the fuck in</h1>
							</div>
						)}
						{/* <button onClick={logInOut}>LogIn/Out</button>
						<button onClick={togglePicker}>TogglePicker</button> */}
					</div>
				)
			}}
		</UserContext.Consumer>
	)
}

export default MySwatches
