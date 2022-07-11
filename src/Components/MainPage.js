import React from 'react'
import Swatch from './MySwatches/Swatch'
import { useState } from 'react'
import ColorConverter from './ColorConverter/ColorConverter'
import SwatchesData from '../Data/SwatchesData.json'
import ColorScale from './ColorScale/ColorScale'

const MainPage = ({ mySwatches, setMySwatches }) => {
	const [popSwatches, setPopSwatches] = useState(SwatchesData.SwatchesData)
	const filters = ['green', 'yellow', 'red', 'blue', 'purple', 'orange', 'brown', 'pink', 'gray', 'teal', 'autumn', 'summer', 'spring', 'winter', 'bold', 'light', 'dark']

	const sortColor = (filter) => {
		if (popSwatches) {
			const sortedColors = [...popSwatches].sort((a) => {
				if (a.style.includes(filter)) {
					return -1
				} else {
					return 0
				}
			})
			setPopSwatches(sortedColors)
		}
	}

	return (
		<div className='mx-3'>
			<div className='filter-button row d-flex justify-content-center'>
				{filters.map((colors, index) => 
					<button onClick={() => sortColor(colors)} className='box-shadow' key={index}>
						{colors}
					</button>
				)}
			</div>
			<div className='d-flex flex-row'>
				<div className='col-12 mt-4'>
					<div className='d-flex justify-content-center'>
						<div className='d-flex justify-content-center flex-wrap'>
							{popSwatches.map((swatch, index) => (
								<Swatch
									mySwatches={mySwatches}
									setMySwatches={setMySwatches}
									swatch={swatch}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
				{/* <div className='col-2 mt-5'>
					<ColorConverter />
					<div className='mt-4'>
						<ColorScale />
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default MainPage
