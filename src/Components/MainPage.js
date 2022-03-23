import React from 'react'
import Swatch from './MySwatches/Swatch'
import { useState } from 'react'
import ColorConverter from './ColorConverter/ColorConverter'

const MainPage = ({ mySwatches, setMySwatches }) => {
	const [popSwatches, setPopSwatches] = useState([
		{
			name: 'Swatch Example',
			id: 10,
			style: ['popular', 'winter', 'red'],
			colors: [
				{
					id: 1,
					color: '#2b2d42',
					swatch: 'one',
				},
				{
					id: 2,
					color: '#8d99ae',
					swatch: 'one',
				},
				{
					id: 3,
					color: '#edf2f4',
					swatch: 'one',
				},
				{
					id: 4,
					color: '#ef233c',
					swatch: 'one',
				},
				{
					id: 5,
					color: '#d90429',
					swatch: 'one',
				},
			],
		},
		{
			name: 'Fall Fest',
			id: 29,
			style: ['brown', 'bold', 'summer', 'orange', 'yellow'],
			colors: [
				{
					id: 1,
					color: '#ffbe0b',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#ed903e',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#975935',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#673820',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#432818',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Cool Colors',
			id: 30,
			style: [
				'bold',
				'popular',
				'summer',
				'yellow',
				'orange',
				'purple',
				'blue',
			],
			colors: [
				{
					id: 1,
					color: '#ffbe0b',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#fb5607',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#ff006e',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#8338ec',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#3a86ff',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Go Ducks!',
			id: 67341,
			style: ['green', 'summer', 'yellow'],
			colors: [
				{
					id: 2,
					color: '#60992b',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#fbde41',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#19c782',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#fffb45',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#2ec4b6',
					swatch: 'two',
				},
				{
					id: 7,
					color: '#f9dd00',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Mississippi Mud Snack',
			id: 31,
			style: ['brown', 'popular'],
			colors: [
				{
					id: 1,
					color: '#a94923',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#98421f',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#873a1c',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#773318',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#662c15',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#552411',
					swatch: 'two',
				},
				{
					id: 7,
					color: '#441d0e',
					swatch: 'two',
				},
				{
					id: 8,
					color: '#33160a',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Squatch Swatch',
			id: 32,
			style: ['bold', 'green', 'blue', 'gray', 'yellow'],
			colors: [
				{
					id: 1,
					color: '#19c782',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#4783bd',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#fbde41',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#8b9898',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Spice Melange',
			id: 33,
			style: ['brown', 'popular'],
			colors: [
				{
					id: 1,
					color: '#94560d',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#8b510c',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#814c0b',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#78470a',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#6f4209',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#653e09',
					swatch: 'two',
				},
				{
					id: 7,
					color: '#5c3908',
					swatch: 'two',
				},
				{
					id: 8,
					color: '#533407',
					swatch: 'two',
				},
				{
					id: 9,
					color: '#492f06',
					swatch: 'two',
				},
				{
					id: 10,
					color: '#402a05',
					swatch: 'two',
				},
				{
					id: 11,
					color: '#2c1800',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Spinach & Greens',
			id: 34,
			style: ['green', 'summer'],
			colors: [
				{
					id: 2,
					color: '#b7e4c7',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#95d5b2',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#74c69d',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#52b788',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#40916c',
					swatch: 'two',
				},
				{
					id: 7,
					color: '#2d6a4f',
					swatch: 'two',
				},
				{
					id: 8,
					color: '#1b4332',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Garden Sample',
			id: 6734,
			style: ['green', 'summer'],
			colors: [
				{
					id: 2,
					color: '#164022',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#3d6233',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#60992b',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#2b9981',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#61b34b',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Trouser Brownies',
			id: 20,
			style: ['brown', 'autumn'],
			colors: [
				{
					id: 1,
					color: '#b57953',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#9d6441',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#875233',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#673820',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#552914',
					swatch: 'two',
				},
				{
					id: 6,
					color: '#432818',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Pinky',
			id: 35,
			style: ['brown', 'pink', 'popular', 'autumn'],
			colors: [
				{
					id: 1,
					color: '#d4216c',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#ffadc6',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#fdeed9',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#a98360',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#3f2613',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Web Theme',
			id: 1325,
			style: ['blue', 'purple', 'black'],
			colors: [
				{
					id: 1,
					color: '#18879d',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#184f9d',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#49189d',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#000000',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Green Team',
			id: 1326,
			style: ['green', 'teal', 'summer'],
			colors: [
				{
					id: 1,
					color: '#abc9aa',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#75db71',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#527b28',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#287b70',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#123811',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Barney',
			id: 1327,
			style: ['green', 'purple', 'black'],
			colors: [
				{
					id: 1,
					color: '#49189d',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#527b28',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#000000',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Merienda Verde',
			id: 2326,
			style: ['green', 'purple', 'black'],
			colors: [
				{
					id: 1,
					color: '#49189d',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#527b28',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#2d6a4f',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#2d6a4f',
					swatch: 'two',
				},
			],
		},
		{
			name: 'swatch force one',
			id: 10,
			style: ['yellow', 'green', 'blue', 'gray'],
			colors: [
				{
					id: 1,
					color: '#19b582',
					swatch: 'one',
				},
				{
					id: 2,
					color: '#1783bd',
					swatch: 'one',
				},
				{
					id: 3,
					color: '#fbde06',
					swatch: 'one',
				},
				{
					id: 4,
					color: '#8b9898',
					swatch: 'one',
				},
				{
					id: 5,
					color: '#355670',
					swatch: 'one',
				},
			],
		},
		{
			name: 'swatch force two',
			id: 299,
			style: ['black', 'green', 'red', 'orange'],
			colors: [
				{
					id: 1,
					color: '#ef476f',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#ffd166',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#06d6a0',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#118ab2',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#073b4c',
					swatch: 'two',
				},
			],
		},
		{
			name: 'Swatch Awesome',
			id: 292,
			style: ['black', 'green', 'red', 'orange'],
			colors: [
				{
					id: 1,
					color: '#011627',
					swatch: 'two',
				},
				{
					id: 2,
					color: '#fdfffc',
					swatch: 'two',
				},
				{
					id: 3,
					color: '#2ec4b6',
					swatch: 'two',
				},
				{
					id: 4,
					color: '#e71d36',
					swatch: 'two',
				},
				{
					id: 5,
					color: '#ff9f1c',
					swatch: 'two',
				},
			],
		},
	])

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
			<div className='d-flex flex-row'>
				<div className=''>
					<div className='Merienda col-1 d-flex flex-column filter-button'>
						<h5 className='Akaya mt-4'>Colors:</h5>
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
						<h5 className='Akaya mt-3'>Styles:</h5>
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
						<button onClick={() => sortColor('light')} className='box-shadow'>
							Light
						</button>
					</div>
				</div>
				<div className='col-9'>
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
					{/* <img className='colorDrip-size mt-4' src={colorDrip}></img> */}
				</div>
			</div>
		</div>
	)
}

export default MainPage
