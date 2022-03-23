import styled from 'styled-components'

const SwatchPickerStyle = styled.div`
	.button-container {
		border: none;
	}
	.container-create {
	}
	.colorDrip-size {
		height: 95%;
		width: 100%;
		border-radius: 1rem;
	}
	.copied {
		font-weight: bold;
		animation-duration: 1s;
		animation-name: copyFade;
		@keyframes copyFade {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	}
	${
		'' /* .rotate p {
		display: none;
		transform: rotate(90deg);
		&:hover {

			transform: rotate(0deg);
		}
	} */
	}

	.image-x-resize {
		width: 2.2em;
		height: 2.2em;
	}
	.input-name {
		border-radius: 0.5rem;
		border: 1px solid lightgray;
	}
	.swatch-div {
		border: 1px solid black;
		width: 100%;
		height: 8rem;
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
		border-radius: 1rem;
		padding: 0.75rem;
		background-color: white;
	}
	.swatch-container {
		border: 1px solid lightgray;
		padding: 1rem;
		border-radius: 1rem;
		background-color: white;
	}
	.swatch-picker-border {
		border: 1px solid lightgray;
		padding: 0.5rem;
		border-radius: 1rem;
		background-color: white;
	}
`

export default SwatchPickerStyle
