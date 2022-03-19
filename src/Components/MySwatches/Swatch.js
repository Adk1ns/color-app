import React from 'react'
import SwatchDiv from './SwatchDiv'
import SwatchPickerStyle from './SwatchPickerStyle'

const Swatch = ({ setMySwatches, swatch, mySwatches }) => {
	const saveButton = () => {
		console.log(mySwatches)
		console.log(swatch)
		console.log(setMySwatches)
		setMySwatches([...mySwatches, swatch])
	}

	return (
		<SwatchPickerStyle>
			<div className='swatch-container m-3 box-shadow'>
				<div className='d-flex justify-content-start'>
					{swatch.colors.map((color, index) => (
						<SwatchDiv bg={color} key={index} />
					))}
				</div>
				<div className='d-flex justify-content-between mt-2'>
					<h3 className='Merienda pt-2'>{swatch.name}</h3>
					<button className=' Merienda BTN-Single' onClick={saveButton}>
						Save
					</button>
				</div>
			</div>
		</SwatchPickerStyle>
	)
}

export default Swatch
