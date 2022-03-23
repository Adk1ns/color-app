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
		font-family: Merienda;
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
	${'' /* buttons */}
	.filter-button {
		button {
			background-color: white;
			width: 5rem;
			border: 1px solid lightgray;
			border-radius: 0.5rem;
			margin-top: 0.25rem;
			padding: 0.25rem;
			&:hover {
				background-color: lightgray;
				color: white;
			}
		}
	}
	.box-shadow {
		box-shadow: 0 7px 10px 2px #0000001a;
	}
	.BTN-left-Round {
		border-radius: 1rem 0 0 1rem;
		background-color: white;
		padding: 0.5rem;
		&:active {
			transform: translateY(2px);
		}
	}
	.BTN-right-Round {
		border-radius: 0 1rem 1rem 0;
		background-color: white;
		padding: 0.5rem;
		border-left: none;
		&:active {
			transform: translateY(2px);
		}
	}
	.BTN-Middle {
		background-color: white;
		padding: 0.5rem;
		border-left: none;
		&:active {
			transform: translateY(2px);
		}
	}
	.BTN-Single {
		border-radius: 1rem;
		background-color: white;
		padding: 0.5rem;
		&:active {
			transform: translateY(2px);
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
		border-radius: 1rem;
	}
	.border-bottom {
		padding-bottom: 1rem;
		border-bottom: 1px solid lightgray;
	}
`
export default AppHeaderStyle
