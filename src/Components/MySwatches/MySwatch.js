import React from 'react'
import SwatchDiv from './SwatchDiv'
import SwatchPickerStyle from './SwatchPickerStyle'

const MySwatch = (props) => {
	const removeSwatch = () => {
		props.setMySwatches(
			props.mySwatches.filter((swatch) => swatch.id !== props.swatch.id)
		)
	}
	const editSwatch = () => {
		props.setColorsInSwatch(props.swatch.colors)
		removeSwatch()
	}

	return (
		<SwatchPickerStyle>
			<div className='swatch-container m-3 Merienda box-shadow'>
				<div className='d-flex justify-content-start'>
					{props.swatch.colors.map((color, index) => (
						<SwatchDiv bg={color} key={index} />
					))}
				</div>
				<div className='d-flex justify-content-between mt-3'>
					<h2 className='Dancing'>{props.swatch.name}</h2>
					<div className='d-flex justify-content-center'>
						<button className=' BTN-left-Round' onClick={editSwatch}>
							Edit
						</button>
						<button className=' BTN-right-Round' onClick={removeSwatch}>
							Remove
						</button>
					</div>
				</div>
			</div>
		</SwatchPickerStyle>
	)
}

export default MySwatch
