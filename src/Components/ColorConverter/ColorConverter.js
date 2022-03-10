import React from 'react'
import ConverterStyle from './ConverterStyle'
import chroma, { rgb } from 'chroma-js'
import { useState, useEffect } from 'react'

const ColorConverter = () => {
	const [enteredValue, setEnteredValue] = useState('hsl(350, 10%, 88%)')
	const [hexConverted, setHexConverted] = useState('')
	const [hslConverted, setHslConverted] = useState('')
	const [rgbConverted, setRgbConverted] = useState('')
	const [nameConverted, setNameConverted] = useState('')
	const [isValid, setIsValid] = useState('false')

	const converterValue = (e) => {
		setEnteredValue(e.target.value)
		checker()
	}
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			checker()
		}, enteredValue)

		return () => clearTimeout(delayDebounceFn)
	}, [enteredValue])

	const convertClickHandler = () => {
		setHexConverted(chroma(enteredValue).hex())
		setHslConverted(chroma(enteredValue).hsl())
		setRgbConverted(chroma(enteredValue).rgb())
		setNameConverted(chroma(enteredValue).name())
	}

	const checker = () => {
		setIsValid(chroma.valid(enteredValue))
	}

	return (
		<ConverterStyle>
			<div className='Merienda border-converter'>
				<h2 className='header-converter text-center'>Color Converter</h2>
				<input
					type='text'
					placeholder='red'
					className='input-converter my-2 text-center'
					onChange={converterValue}
				/>
				<div className='d-flex justify-content-around border-bottom'>
					{isValid && <p>valid</p>}
					{!isValid && <p>no!</p>}
					<div>
						<button className='BTN-Single mb-2' onClick={convertClickHandler}>
							convert
						</button>
					</div>
				</div>
				<div className='mx-4 mt-3'>
					<p>HEX: {hexConverted}</p>
					<p>
						RGB: ({rgbConverted[0]}, {rgbConverted[1]}, {rgbConverted[2]})
					</p>
					{/* <p>name: {nameConverted}</p> */}

					<p>
						HSL: {hslConverted[0]}, {hslConverted[1]}, {hslConverted[2]},{' '}
						{hslConverted[3]}
					</p>
				</div>
			</div>
		</ConverterStyle>
	)
}

export default ColorConverter
