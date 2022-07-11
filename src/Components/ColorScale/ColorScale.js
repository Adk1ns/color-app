import React from 'react'
import ConverterStyle from '../ColorConverter/ConverterStyle'
import chroma from 'chroma-js'

const ColorScale = () => {
	// problems with chroma.scale()
	// const newColor = chroma.scale(['yellow', 'red', 'black'])
	// new idea: add darken / lighten
	console.log(chroma('hotpink').darken(2.6).hex())
	console.log(chroma('hotpink').brighten(2).hex())
	return (
		<ConverterStyle>
			<div className='Merienda border-converter box-shadow'>
				<h2 className='header-converter text-center p-2 mb-0'>Light / Dark</h2>
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
