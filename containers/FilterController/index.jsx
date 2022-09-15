const FilterController = () => {
	return (
		<div className='col-sm-3 collection-filter'>
			{/* side-bar colleps block stat */}
			<div className='collection-filter-block'>
				{/* brand filter start */}
				<div className='collection-mobile-back'>
					<span className='filter-back'>
						<i className='fa fa-angle-left' aria-hidden='true' /> back
					</span>
				</div>
				<div className='collection-collapse-block open'>
					<h3 className='collapse-block-title'>brand</h3>
					<div className='collection-collapse-block-content'>
						<div className='collection-brand-filter'>
							<div className='form-check collection-filter-checkbox'>
								<input type='checkbox' className='form-check-input' id='zara' />
								<label className='form-check-label' htmlFor='zara'>
									zara
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='vera-moda'
								/>
								<label className='form-check-label' htmlFor='vera-moda'>
									vera-moda
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='forever-21'
								/>
								<label className='form-check-label' htmlFor='forever-21'>
									forever-21
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='roadster'
								/>
								<label className='form-check-label' htmlFor='roadster'>
									roadster
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input type='checkbox' className='form-check-input' id='only' />
								<label className='form-check-label' htmlFor='only'>
									only
								</label>
							</div>
						</div>
					</div>
				</div>
				{/* color filter start here */}
				<div className='collection-collapse-block open'>
					<h3 className='collapse-block-title'>colors</h3>
					<div className='collection-collapse-block-content'>
						<div className='color-selector'>
							<ul>
								<li className='color-1 active' />
								<li className='color-2' />
								<li className='color-3' />
								<li className='color-4' />
								<li className='color-5' />
								<li className='color-6' />
								<li className='color-7' />
							</ul>
						</div>
					</div>
				</div>
				{/* size filter start here */}
				<div className='collection-collapse-block border-0 open'>
					<h3 className='collapse-block-title'>size</h3>
					<div className='collection-collapse-block-content'>
						<div className='collection-brand-filter'>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='hundred'
								/>
								<label className='form-check-label' htmlFor='hundred'>
									s
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='twohundred'
								/>
								<label className='form-check-label' htmlFor='twohundred'>
									m
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='threehundred'
								/>
								<label className='form-check-label' htmlFor='threehundred'>
									l
								</label>
							</div>
							<div className='form-check collection-filter-checkbox'>
								<input
									type='checkbox'
									className='form-check-input'
									id='fourhundred'
								/>
								<label className='form-check-label' htmlFor='fourhundred'>
									xl
								</label>
							</div>
						</div>
					</div>
				</div>
				{/* price filter start here */}
				<div className='collection-collapse-block border-0 open'>
					<h3 className='collapse-block-title'>price</h3>
					<div className='collection-collapse-block-content'>
						<div className='wrapper mt-3'>
							<div className='range-slider'>
								<input type='text' className='js-range-slider' defaultValue />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* silde-bar colleps block end here */}
			{/* side-bar single product slider start */}
			<div className='theme-card'>
				<h5 className='title-border'>new product</h5>
				<div className='offer-slider slide-1'>
					<div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/1.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/011.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/16.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
					</div>
					<div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/001.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/4.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
						<div className='media'>
							<a href>
								<img
									className='img-fluid blur-up lazyload'
									src='../assets/images/fashion/pro/19.jpg'
									alt=''
								/>
							</a>
							<div className='media-body align-self-center'>
								<div className='rating'>
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' /> <i className='fa fa-star' />{' '}
									<i className='fa fa-star' />
								</div>
								<a href='product-page(no-sidebar).html'>
									<h6>Slim Fit Cotton Shirt</h6>
								</a>
								<h4>$500.00</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* side-bar single product slider end */}
			{/* side-bar banner start here */}
			<div className='collection-sidebar-banner'>
				<a href='#'>
					<img
						src='../assets/images/side-banner.png'
						className='img-fluid blur-up lazyload'
						alt=''
					/>
				</a>
			</div>
			{/* side-bar banner end here */}
		</div>
	);
};

export default FilterController;
