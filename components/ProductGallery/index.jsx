const ProductGallery = () => {
	return (
		<>
			<div className='col-lg-1 col-sm-2 col-xs-12'>
				<div className='row'>
					<div className='col-12 p-0'>
						<div className='slider-right-nav'>
							<div>
								<img
									src='../assets/images/pro3/1.jpg'
									alt=''
									className='img-fluid blur-up lazyload'
								/>
							</div>
							<div>
								<img
									src='../assets/images/pro3/2.jpg'
									alt=''
									className='img-fluid blur-up lazyload'
								/>
							</div>
							<div>
								<img
									src='../assets/images/pro3/27.jpg'
									alt=''
									className='img-fluid blur-up lazyload'
								/>
							</div>
							<div>
								<img
									src='../assets/images/pro3/27.jpg'
									alt=''
									className='img-fluid blur-up lazyload'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-lg-3 col-sm-10 col-xs-12 order-up'>
				<div className='product-right-slick'>
					<div>
						<img
							src='../assets/images/pro3/1.jpg'
							alt=''
							className='img-fluid blur-up lazyload image_zoom_cls-0'
						/>
					</div>
					<div>
						<img
							src='../assets/images/pro3/2.jpg'
							alt=''
							className='img-fluid blur-up lazyload image_zoom_cls-1'
						/>
					</div>
					<div>
						<img
							src='../assets/images/pro3/27.jpg'
							alt=''
							className='img-fluid blur-up lazyload image_zoom_cls-2'
						/>
					</div>
					<div>
						<img
							src='../assets/images/pro3/27.jpg'
							alt=''
							className='img-fluid blur-up lazyload image_zoom_cls-3'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductGallery;
