import styled from 'styled-components'

const SwatchPickerStyle = styled.div`
	.button-container {
		border: none;
	}
	.container-create {
	}
	.color-input {
		border: none;
		font-size: 1.2em;
		width: 80%;
		&:focus {
			border: 1px solid lightgray;
		}
	}

	.color-row {
		border-radius: 1rem;
	}

	.copied {
		font-weight: bold;
		animation-duration: 1s;
		animation-name: copyFade;
		position: relative;
		top: 12%;
		@keyframes copyFade {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	}

	.image-x-resize {
		width: 2.2em;
		height: 2.2em;
	}

	.input-name {
		border-radius: 0.25rem;
		border: 1px solid lightgray;
	}

	.palette-div {
		border: 1px solid black;
		width: ${(props) => props.size || '58.8'};
		min-height: 13rem;
		background-color: ${(props) => props.bg || 'red'};
		color: ${(props) => props.textColor || 'black'};
		cursor: pointer;
		&:hover {
			border: 1px solid white;
		}
	}
	.rotate {
		writing-mode: vertical-rl;
		text-orientation: upright;
	}

	.swatch-div {
		border: 1px solid black;
		height: 10rem;
		background-color: ${(props) => props.bg || 'red'};
		color: ${(props) => props.textColor || 'black'};
		cursor: pointer;
		&:hover {
			border: 1px solid white;
		}
	}

	.swatch-div-container {
		border: 1px solid lightgray;
		min-height: 13rem;
		border-radius: 0.25rem;
		${'' /* padding: 0.75rem; */}
		background-color: white;
		display: flex;
	}
	.swatch-container {
		border: 1px solid lightgray;
		padding: 1rem;
		border-radius: 0.25rem;
		background-color: white;
	}
	.swatch-picker-border {
		border: 1px solid lightgray;
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: white;
	}
`

export default SwatchPickerStyle
