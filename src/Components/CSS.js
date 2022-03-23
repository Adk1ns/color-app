import React from 'react'

const CSS = () => {
	return (
		<div>
			<h1>This is now going to be a running note pad/to do list</h1>

			<h3>find another way to tag colors...?</h3>

			<h4>change swatchdivs on swatch picker</h4>
			<p>better/fuller visiual</p>
			<h4>display hsl and rgba vertically in swatch div</h4>
			<h3>cap # of swatches at 5</h3>
			<p>
				user types: unknown, basic user, pro (pro can have more than 5 swatches,
				unknown has 0)
			</p>
			<h4>add fade in</h4>
			<p>fade in on page load</p>
			<h4>copy click on color converter</h4>
			<p>similar to swatchdiv</p>
			<h4>Add chroma scale component</h4>
			<p>
				chroma.scale(['#fafa6e','#2A4858']) .mode('lch').colors(6) .... maybe
				add color scale component?
			</p>
			<h4>log in and user Auth</h4>
			<p>google auth</p>
			<h4>Back End</h4>
			<p>save swatches for logged in users</p>
			<h4>Deploy</h4>
			<p>firebase</p>
			<h4>add space</h4>
			<p>non invasive adds on right hand corner</p>
			<h4>Merch...</h4>
			<p>print to order merch</p>
			<div className='d-flex justify-content-start'>
				<p>google fonts:</p>
				<h3 className='Akaya px-2'>Akaya</h3>
				<h3 className='Redressed px-2'>Redressed</h3>
				<h3 className='Dancing px-2'>Dancing</h3>
				<h3 className='Praise px-2'>Praise</h3>
				<h3 className='Vibes px-2'>Vibes</h3>
				<h3 className='Merienda px-2'>Merienda</h3>
				<h3 className='Tangerine px-2'>Tangerine</h3>
			</div>
		</div>
	)
}

export default CSS
