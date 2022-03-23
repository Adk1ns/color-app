import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { RgbaStringColorPicker } from 'react-colorful'
import { HslaStringColorPicker } from 'react-colorful'
import { useState } from 'react'
import SwatchDiv from './SwatchDiv'
import SwatchPickerStyle from './SwatchPickerStyle'
import chroma from 'chroma-js'

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
	const [addButton, setAddButton] = useState(false)

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
		if (props.colorsInSwatch.length === 9) {
			setAddButton(true)
		}
	}
	console.log(props.colorsInSwatch.length)

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
		if (props.colorsInSwatch.length < 11) {
			console.log('no')
			setAddButton(false)
		}
	}

	return (
		<SwatchPickerStyle>
			<div className='d-flex justify-content-center px-5'>
				<div className='container-create m-3 p-3 Merienda swatch-picker-border box-shadow col-9'>
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
										<button
											className='BTN-Single'
											onClick={addColor}
											disabled={addButton}>
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
									<div className='text-center'>
										<p>{color}</p>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											onClick={addColor}
											className='BTN-Single'
											disabled={addButton}>
											Add Color
										</button>
									</div>
								</>
							)}
							{colorFormat === 'hsla' && (
								<>
									<div className='d-flex justify-content-center my-3'>
										<HslaStringColorPicker color={color} onChange={setColor} />
									</div>
									<div className='text-center'>
										<p>{color}</p>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											onClick={addColor}
											className='BTN-Single'
											disabled={addButton}>
											Add Color
										</button>
									</div>
								</>
							)}
						</div>
						<div className='col-9'>
							{props.colorsInSwatch && (
								<div className='swatch-div-container d-flex align-items-center flex-wrap mt-2'>
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
							<div className='d-flex justify-content-center pt-3 border-bottom'>
								<p className='my-auto mx-2'>{name}</p>
								<input
									className='input-name mx-2'
									type='text'
									onChange={(e) => setSwatchName(e.target.value)}
								/>

								<button className='BTN-Single mx-2' onClick={saveButton}>
									save Swatch
								</button>
								<div>
									<button
										className='BTN-Single mx-2'
										onClick={removeClickHandler}>
										{colorRemover ? 'Done' : 'Remove Colors'}
									</button>
								</div>
							</div>
							<div className='d-flex justify-content-around pt-3'>
								<p className='my-auto'>Tag Colors:</p>
								<button className='BTN-Single mx-2'>Red</button>
								<button className='BTN-Single mx-2'>Orange</button>
								<button className='BTN-Single mx-2'>Yellow</button>
								<button className='BTN-Single mx-2'>Green</button>
								<button className='BTN-Single mx-2'>Blue</button>
								<button className='BTN-Single mx-2'>Purple</button>
								<button className='BTN-Single mx-2'>Gray</button>
								<button className='BTN-Single mx-2'>Black</button>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='col-3 swatch-picker-border box-shadow m-3'>
					<h1>Ads here</h1>
				</div> */}
			</div>
		</SwatchPickerStyle>
	)
}

export default SwatchPicker
