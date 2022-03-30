import React from 'react'
import Swatch from './MySwatches/Swatch'
import { useState } from 'react'
import ColorConverter from './ColorConverter/ColorConverter'
import SwatchesData from '../Data/SwatchesData.json'
import ColorScale from './ColorScale/ColorScale'

const MainPage = ({ mySwatches, setMySwatches }) => {
	const [popSwatches, setPopSwatches] = useState(SwatchesData.SwatchesData)

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

	//TODO: re-factor buttons

	return (
		<div className='mx-3'>
			<div className='filter-button row d-flex justify-content-center'>
				<div></div>
				<button onClick={() => sortColor('green')} className='box-shadow'>
					Green
				</button>
				<button onClick={() => sortColor('yellow')} className='box-shadow'>
					Yellow
				</button>
				<button onClick={() => sortColor('red')} className='box-shadow'>
					Red
				</button>
				<button onClick={() => sortColor('blue')} className='box-shadow'>
					Blue
				</button>
				<button onClick={() => sortColor('purple')} className='box-shadow'>
					Purple
				</button>
				<button onClick={() => sortColor('orange')} className='box-shadow'>
					Orange
				</button>
				<button onClick={() => sortColor('brown')} className='box-shadow'>
					Brown
				</button>
				<button onClick={() => sortColor('pink')} className='box-shadow'>
					Pink
				</button>
				<button onClick={() => sortColor('gray')} className='box-shadow'>
					Grey
				</button>
				<button onClick={() => sortColor('black')} className='box-shadow'>
					Black
				</button>
				<button onClick={() => sortColor('popular')} className='box-shadow'>
					Popular
				</button>
				<button onClick={() => sortColor('autumn')} className='box-shadow'>
					Autumn
				</button>
				<button onClick={() => sortColor('summer')} className='box-shadow'>
					Summer
				</button>
				<button onClick={() => sortColor('spring')} className='box-shadow'>
					Spring
				</button>
				<button onClick={() => sortColor('winter')} className='box-shadow'>
					Winter
				</button>
				<button onClick={() => sortColor('bold')} className='box-shadow'>
					Bold
				</button>
				<button onClick={() => sortColor('trending')} className='box-shadow'>
					Trending
				</button>
				<button onClick={() => sortColor('new')} className='box-shadow'>
					New
				</button>
				<button onClick={() => sortColor('teal')} className='box-shadow'>
					Teal
				</button>
				<button onClick={() => sortColor('light')} className='box-shadow'>
					Light
				</button>
				<button onClick={() => sortColor('dark')} className='box-shadow'>
					Dark
				</button>
			</div>
			<div className='d-flex flex-row'>
				<div className='col-10 mt-4'>
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
				<div className='col-2 mt-5'>
					<ColorConverter />
					<div className='mt-4'>
						<ColorScale />
					</div>
					{/* <img className='colorDrip-size mt-4' src={colorDrip}></img> */}
				</div>
			</div>
		</div>
	)
}

export default MainPage
