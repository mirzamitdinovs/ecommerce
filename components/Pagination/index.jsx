const Pagination = () => {
	return (
		<div className='product-pagination'>
			<div className='theme-paggination-block'>
				<div className='row'>
					<div className='col-xl-6 col-md-6 col-sm-12'>
						<nav aria-label='Page navigation'>
							<ul className='pagination'>
								<li className='page-item'>
									<a className='page-link' href='#' aria-label='Previous'>
										<span aria-hidden='true'>
											<i className='fa fa-chevron-left' aria-hidden='true' />
										</span>{' '}
										<span className='sr-only'>Previous</span>
									</a>
								</li>
								<li className='page-item active'>
									<a className='page-link' href='#'>
										1
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										2
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										3
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#' aria-label='Next'>
										<span aria-hidden='true'>
											<i className='fa fa-chevron-right' aria-hidden='true' />
										</span>{' '}
										<span className='sr-only'>Next</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='col-xl-6 col-md-6 col-sm-12'>
						<div className='product-search-count-bottom'>
							<h5>Showing Products 1-24 of 10 Result</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
