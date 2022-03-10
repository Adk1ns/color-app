import React, { useLayoutEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { RgbaStringColorPicker } from 'react-colorful'
import { HslaStringColorPicker } from 'react-colorful'
import { useState, useEffect } from 'react'
import SwatchDiv from './SwatchDiv'
import SwatchPickerStyle from './SwatchPickerStyle'
import chroma from 'chroma-js'
import MySwatches from '../MySwatches'

const SwatchPicker = (
	props,
	mySwatches,
	setMySwatches,
	colorsInSwatch,
	setColorsInSwatch
) => {
	const [color, setColor] = useState('#985f2a')
	const [colorFormat, setColorFormat] = useState('hex')
	const [name, setSwatchName] = useState('Please Add A Name')
	const [colorRemover, setColorRemover] = useState(false)

	const hexFormat = () => {
		setColorFormat('hex')
		setColor(chroma(color).hex())
	}
	const rgbaFormat = () => {
		setColorFormat('rgba')
	}
	const hslaFormat = () => {
		setColorFormat('hsla')
	}

	const addColor = () => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newColor = { id, color }
		props.setColorsInSwatch([...props.colorsInSwatch, newColor])
	}
	console.log(props.setMySwatches)

	const saveButton = () => {
		//new error in save button, crash on save
		const id = Math.floor(Math.random() * 100000) + 1
		const colors = props.colorsInSwatch
		const newSwatch = { id: id, colors, name }
		props.setMySwatches([...props.mySwatches, newSwatch])
	}

	const removeClickHandler = () => {
		setColorRemover(!colorRemover)
	}
	const deleteColor = (id) => {
		props.setColorsInSwatch(
			props.colorsInSwatch.filter((color) => color.id !== id)
		)
	}

	return (
		<SwatchPickerStyle>
			<div className='container-create m-3 Merienda swatch-picker-border'>
				<div className='col m-2 '>
					<div className='row'>
						<div className='col-3'>
							<div className='button-container d-flex justify-content-center '>
								<button className='BTN-left-Round' onClick={hexFormat}>
									hex
								</button>
								<button className='BTN-Middle' onClick={rgbaFormat}>
									rgba
								</button>
								<button className='BTN-right-Round' onClick={hslaFormat}>
									hsla
								</button>
							</div>
							{colorFormat === 'hex' && (
								<div className=''>
									<div className='d-flex justify-content-center my-3'>
										<HexColorPicker color={color} onChange={setColor} />
									</div>
									<div className='text-center'>
										<p>{color}</p>
									</div>
									<div className='d-flex justify-content-center'>
										<button className='BTN-Single' onClick={addColor}>
											Add Color
										</button>
									</div>
								</div>
							)}
							{colorFormat === 'rgba' && (
								<>
									<div className='d-flex justify-content-center my-3'>
										<RgbaStringColorPicker color={color} onChange={setColor} />
									</div>
									<div>
										<p>{color}</p>
									</div>
									<button onClick={addColor}>Add Color</button>
								</>
							)}
							{colorFormat === 'hsla' && (
								<>
									<div className='d-flex justify-content-center my-3'>
										<HslaStringColorPicker color={color} onChange={setColor} />
									</div>
									<div>
										<p>{color}</p>
									</div>
									<button onClick={addColor}>Add Color</button>
								</>
							)}
						</div>
						<div className='col-6'>
							{props.colorsInSwatch && (
								<div className=' swatch-div-container d-flex align-items-center flex-wrap mt-2'>
									{props.colorsInSwatch.map((color, index) => (
										<SwatchDiv
											bg={color}
											key={index}
											onDelete={deleteColor}
											colorRemover={colorRemover}
										/>
									))}
								</div>
							)}
							<div className='d-flex justify-content-between pt-5'>
								<p className='my-auto'>{name}</p>
								<input
									type='text'
									onChange={(e) => setSwatchName(e.target.value)}
								/>

								<button className='BTN-Single' onClick={saveButton}>
									save Swatch
								</button>
								<div>
									<button className='BTN-Single' onClick={removeClickHandler}>
										{colorRemover ? 'Done' : 'Remove Colors'}
									</button>
								</div>
							</div>
						</div>
						<div className='col-3'>
							<h1> BUY STUFF</h1>
						</div>
					</div>
				</div>
			</div>
		</SwatchPickerStyle>
	)
}

export default SwatchPicker
