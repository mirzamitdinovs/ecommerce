const ProductAddToCart = () => {
	return (
		<div className='col-lg-4'>
			<div className='product-right product-form-box'>
				<h4>
					<del>$459.00</del>
					<span>55% off</span>
				</h4>
				<h3>$32.96</h3>
				<ul className='color-variant'>
					<li className='bg-light0 active' />
					<li className='bg-light1' />
					<li className='bg-light2' />
				</ul>
				<div
					id='selectSize'
					className='addeffect-section product-description border-product'
				>
					<h6 className='product-title'>Sales Ends In</h6>
					<div className='timer'>
						<p id='demo' />
					</div>
					<h6 className='product-title'>select size</h6>
					<div
						className='modal fade'
						id='sizemodal'
						tabIndex={-1}
						role='dialog'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog modal-dialog-centered' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title' id='exampleModalLabel'>
										Sheer Straight Kurta
									</h5>
									<button
										type='button'
										className='btn-close'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body'>
									<img
										src='../assets/images/size-chart.jpg'
										alt=''
										className='img-fluid blur-up lazyload'
									/>
								</div>
							</div>
						</div>
					</div>
					<h6 className='error-message'>please select size</h6>
					<div className='size-box'>
						<ul>
							<li>
								<a href='javascript:void(0)'>s</a>
							</li>
							<li>
								<a href='javascript:void(0)'>m</a>
							</li>
							<li>
								<a href='javascript:void(0)'>l</a>
							</li>
							<li>
								<a href='javascript:void(0)'>xl</a>
							</li>
						</ul>
					</div>
					<h6 className='product-title'>quantity</h6>
					<div className='qty-box'>
						<div className='input-group'>
							<span className='input-group-prepend'>
								<button
									type='button'
									className='btn quantity-left-minus'
									data-type='minus'
									data-field
								>
									<i className='ti-angle-left' />
								</button>{' '}
							</span>
							<input
								type='text'
								name='quantity'
								className='form-control input-number'
								defaultValue={1}
							/>
							<span className='input-group-prepend'>
								<button
									type='button'
									className='btn quantity-right-plus'
									data-type='plus'
									data-field
								>
									<i className='ti-angle-right' />
								</button>
							</span>
						</div>
					</div>
				</div>
				<div className='product-buttons'>
					<a
						href='javascript:void(0)'
						id='cartEffect'
						className='btn btn-solid hover-solid btn-animation'
					>
						add to cart
					</a>{' '}
					<a href='#' className='btn btn-solid'>
						wishlist
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductAddToCart;
