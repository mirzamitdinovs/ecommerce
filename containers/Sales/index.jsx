const Sales = () => {
	return (
		<section className='pb-0 ratio2_1'>
			<div className='container'>
				<div className='row partition2'>
					<div className='col-md-6'>
						<a href='#'>
							<div className='collection-banner p-right text-center'>
								<div className='img-part'>
									<img
										src='../assets/images/sub-banner1.jpg'
										className='img-fluid blur-up lazyload bg-img'
										alt=''
									/>
								</div>
								<div className='contain-banner'>
									<div>
										<h4>save 30%</h4>
										<h2>men</h2>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className='col-md-6'>
						<a href='#'>
							<div className='collection-banner p-right text-center'>
								<div className='img-part'>
									<img
										src='../assets/images/sub-banner2.jpg'
										className='img-fluid blur-up lazyload bg-img'
										alt=''
									/>
								</div>
								<div className='contain-banner'>
									<div>
										<h4>save 60%</h4>
										<h2>women</h2>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sales;
