import React, { useEffect } from 'react'
import SwatchPickerStyle from './SwatchPickerStyle'
import chroma from 'chroma-js'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import X from '../../Images/X.png'
import XWhite from '../../Images/XWhite.png'

const PaletteDiv = ({ bg, onDelete, colorRemover }) => {
	const [textColor, setTextColor] = useState()
	const [xColor, setXColor] = useState('black')

	useEffect(() => {
		if (chroma(bg.color).luminance() < 0.2) {
			setTextColor('text-white')
			setXColor('white')
		} else {
			setTextColor('text-black')
			setXColor('black')
		}
	}, [])

	return (
		<SwatchPickerStyle bg={bg.color}>
			{/* <div className='palette-div flex-column align-items-end d-flex flex-column-reverse '> */}
			<div className='palette-div'>
				<div className='mt-1 px-1'>
					<p className={textColor}>{bg.color}</p>
				</div>

				{colorRemover && xColor === 'black' && (
					<div className='d-flex justify-content-center' onClick={() => onDelete(bg.id)}>
						<img src={X} className='image-x-resize mt-5' />
					</div>
				)}
				{colorRemover && xColor === 'white' && (
					<div className='d-flex justify-content-center' onClick={() => onDelete(bg.id)}>
						<img src={XWhite} className='image-x-resize mt-5' />
					</div>
				)}
			</div>
		</SwatchPickerStyle>
	)
}

export default PaletteDiv
