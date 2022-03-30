import React from 'react'
import ConverterStyle from '../ColorConverter/ConverterStyle'

const ColorScale = () => {
	return (
		<ConverterStyle>
			<div className='Merienda border-converter box-shadow'>
				<h2 className='header-converter text-center p-2 mb-0'>Color Scale</h2>
				<input
					type='text'
					placeholder='red'
					className='input-converter mb-2 text-center'
				/>
				<input
					type='text'
					placeholder='blue'
					className='input-converter mb-2 text-center'
				/>
				<div className='d-flex justify-content-center border-bottom pb-1'>
					<div className='mt-3'></div>
					<div>
						<button className='BTN-Single mt-1'>Get Colors</button>
					</div>
				</div>
				<div className='mx-4 mt-5'></div>
			</div>
		</ConverterStyle>
	)
}

export default ColorScale
