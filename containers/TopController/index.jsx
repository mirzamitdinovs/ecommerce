const TopController = () => {
	return (
		<div className='product-top-filter'>
			<div className='row'>
				<div className='col-xl-12'>
					<div className='filter-main-btn'>
						<span className='filter-btn btn btn-theme'>
							<i className='fa fa-filter' aria-hidden='true' /> Filter
						</span>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<div className='product-filter-content'>
						<div className='collection-view'>
							<ul>
								<li>
									<i className='fa fa-th grid-layout-view' />
								</li>
								<li>
									<i className='fa fa-list-ul list-layout-view' />
								</li>
							</ul>
						</div>
						<div className='collection-grid-view'>
							<ul>
								<li>
									<img
										src='../assets/images/icon/2.png'
										alt=''
										className='product-2-layout-view'
									/>
								</li>
								<li>
									<img
										src='../assets/images/icon/3.png'
										alt=''
										className='product-3-layout-view'
									/>
								</li>
								<li>
									<img
										src='../assets/images/icon/4.png'
										alt=''
										className='product-4-layout-view'
									/>
								</li>
								<li>
									<img
										src='../assets/images/icon/6.png'
										alt=''
										className='product-6-layout-view'
									/>
								</li>
							</ul>
						</div>
						<div className='product-page-per-view'>
							<select>
								<option value='High to low'>24 Products Par Page</option>
								<option value='Low to High'>50 Products Par Page</option>
								<option value='Low to High'>100 Products Par Page</option>
							</select>
						</div>
						<div className='product-page-filter'>
							<select>
								<option value='High to low'>Sorting items</option>
								<option value='Low to High'>50 Products</option>
								<option value='Low to High'>100 Products</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopController;
