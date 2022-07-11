import React from 'react'
import { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwatchPicker from './MySwatches/SwatchPicker'
import MySwatch from './MySwatches/MySwatch'
import UserContext from '../Context/user-context'
import ColorConverter from './ColorConverter/ColorConverter'

const MySwatches = ({ mySwatches, setMySwatches }) => {
	const ctx = useContext(UserContext)
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [swatchPickerOpen, setSwatchPickerOpen] = useState(true)
	const [colorsInSwatch, setColorsInSwatch] = useState([])
	const [name, setSwatchName] = useState('Please Add A Name')

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
					<div className='Merienda mt-2'>
						{isLoggedIn && (
							<>
							<div className='d-flex justify-content-around mt-3'>
								<div className='col-9'>
									{swatchPickerOpen && (
										<SwatchPicker
											setMySwatches={setMySwatches}
											mySwatches={mySwatches}
											colorsInSwatch={colorsInSwatch}
											setColorsInSwatch={setColorsInSwatch}
											name={name}
											setSwatchName={setSwatchName}
										/>
										
									)}
								</div>
								<div className='col-2'>
									<ColorConverter />
								</div>
								</div>
								<h1 className='text-center pt-5 border-bottom'>
									My Color Swatch Collection
								</h1>
								<div className='d-flex flex-wrap justify-content-center border-bottom'>
									<div className='d-flex flex-wrap justify-content-center'>
										{mySwatches.map((swatch, index) => (
											<MySwatch
												swatch={swatch}
												key={index}
												mySwatches={mySwatches}
												setMySwatches={setMySwatches}
												setColorsInSwatch={setColorsInSwatch}
												name={name}
												setSwatchName={setSwatchName}
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
								<h1>Please log in</h1>
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
