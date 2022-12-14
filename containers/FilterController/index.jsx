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
		</div>
	);
};

export default FilterController;
