import Slider from 'react-slick';

const Hero = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className='p-0'>
			<Slider {...settings} className='slider-1 home-slider'>
				<div>
					<div className='home  text-center'>
						<img
							src='../assets/images/home-banner/1.jpg'
							alt=''
							className='bg-img blur-up lazyload'
						/>
						<div className='container'>
							<div className='row'>
								<div className='col'>
									<div className='slider-contain'>
										<div>
											<h4>welcome to fashion</h4>
											<h1>men fashion</h1>
											<a href='#' className='btn btn-solid'>
												shop now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='home text-center'>
						<img
							src='../assets/images/home-banner/2.jpg'
							alt=''
							className='bg-img blur-up lazyload'
						/>
						<div className='container'>
							<div className='row'>
								<div className='col'>
									<div className='slider-contain'>
										<div>
											<h4>welcome to fashion</h4>
											<h1>women fashion</h1>
											<a href='#' className='btn btn-solid'>
												shop now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default Hero;
