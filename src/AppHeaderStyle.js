import styled from 'styled-components'

const AppHeaderStyle = styled.div`
	${'' /* fonts */}
	.Akaya {
		font-family: Akaya Telivigala;
	}
	.Lucky {
		font-family: Luckiest Guy;
	}
	.PermanentMarker {
		font-family: Permanent Marker;
	}
	.Redressed {
		font-family: Redressed;
	}
	.Dancing {
		font-family: Dancing Script;
	}
	.Praise {
		font-family: Praise;
	}
	.Vibes {
		font-family: Great Vibes;
	}
	.Merienda {
		font-family: Ubuntu;
	}
	.Tangerine {
		font-family: Tangerine;
		font-size: 2.5em;
	}
	.text-white {
		color: white;
	}
	.text-black {
		color: black;
	}
	.text-gray {
		color: #8b9898;
	}
	${'' /* buttons */}
	.filter-button {
		button {
			background-color: white;
			width: 5rem;
			border: 1px solid lightgray;
			border-radius: 0 0 0.25rem 0.25rem;
			${'' /* margin-top: 0.25rem; */}
			padding: 0.25rem;
			color: gray;
			&:hover {
				color: black;
			}
			&:active {
				transform: translateY(2px);
				color: black;
				border: 1px solid gray;
				border-top: none;
			}
		}
	}
	.box-shadow {
		box-shadow: 0 7px 10px 2px #0000001a;
	}
	.BTN-left-Round {
		border-radius: 0.25rem 0 0 0.25rem;
		background-color: white;
		padding: 0.5rem;
		border: 1px solid lightgray;
		color: gray;
		&:hover {
			color: black;
		}
		&:active {
			transform: translateY(2px);
			color: black;
			border: 1px solid black;
		}
	}
	.BTN-right-Round {
		border-radius: 0 0.25rem 0.25rem 0;
		background-color: white;
		padding: 0.5rem;
		border-left: none;
		border: 1px solid lightgray;
		color: gray;
		&:hover {
			color: black;
		}
		&:active {
			transform: translateY(2px);
			color: black;
			border: 1px solid black;
		}
	}
	.BTN-Middle {
		background-color: white;
		padding: 0.5rem;
		border-left: none;
		border: 1px solid lightgray;
		color: gray;
		&:hover {
			color: black;
		}
		&:active {
			transform: translateY(2px);
			color: black;
			border: 1px solid black;
		}
	}
	.BTN-Single {
		border-radius: 0.25rem;
		background-color: white;
		padding: 0.5rem;
		border: 1px solid lightgray;
		color: gray;
		&:hover {
			color: black;
		}
		&:active {
			transform: translateY(2px);
			color: black;
			border: 1px solid black;
		}
		&:disabled {
			text-decoration: line-through;
		}
	}

	${'' /* navbar */}
	.Nav-Text {
		color: white;
		text-decoration: none;
	}

	${'' /* other */}

	.colorDrip-size {
		height: 20%;
		width: 100%;
		border-radius: 0.25rem;
	}
	.border-bottom {
		padding-bottom: 0.25rem;
		border-bottom: 1px solid lightgray;
	}
	.square-1 {
		background-color: white;
		width: 1.2rem;
		height: 1.2rem;
		position: absolute;
		top: 1.5rem;
		left: 22.4rem;
	}
	.square-2 {
		background-color: white;
		width: 1.2rem;
		height: 1.2rem;
		position: absolute;
		top: 2.6rem;
		left: 21.2rem;
	}
`
export default AppHeaderStyle
