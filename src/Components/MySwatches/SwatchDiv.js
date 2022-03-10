import React, { useEffect } from 'react'
import SwatchPickerStyle from './SwatchPickerStyle'
import chroma from 'chroma-js'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import X from '../../Images/X.png'
import XWhite from '../../Images/XWhite.png'

const SwatchDiv = ({ bg, onDelete, colorRemover }) => {
	const [textColor, setTextColor] = useState()
	const [copied, setCopied] = useState()
	const [xColor, setXColor] = useState('black')
	const [showCopy, setShowCopy] = useState(false)

	useEffect(() => {
		if (chroma(bg.color).luminance() < 0.2) {
			setTextColor('text-white')
			setXColor('white')
		} else {
			setTextColor('text-black')
			setXColor('black')
		}
	}, [])

	const copyDisplay = () => {
		setShowCopy(true)
		setTimeout(() => {
			setShowCopy(false)
		}, 1000)
	}
	const copier = true

	return (
		<CopyToClipboard text={bg.color} onCopy={() => setCopied({ copied: true })}>
			<SwatchPickerStyle bg={bg.color}>
				<div
					className='swatch-div flex-column align-items-end d-flex flex-column-reverse'
					onClick={copyDisplay}
				>
					<div className='mt-1 px-1 Merienda rotate'>
						<p className={textColor}>{bg.color}</p>
					</div>

					{colorRemover && xColor === 'black' && (
						<div className='mx-auto' onClick={() => onDelete(bg.id)}>
							<img src={X} className='image-x-resize' />
						</div>
					)}
					{colorRemover && xColor === 'white' && (
						<div className='mx-auto' onClick={() => onDelete(bg.id)}>
							<img src={XWhite} className='image-x-resize' />
						</div>
					)}
					{showCopy && (
						<div className='mx-2 copied'>
							<p className={textColor}>Copied</p>{' '}
						</div>
					)}
				</div>
			</SwatchPickerStyle>
		</CopyToClipboard>
	)
}

export default SwatchDiv
