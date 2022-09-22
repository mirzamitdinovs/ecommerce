import Slider from 'react-slick';

const Testimonials = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
	};
	return (
		<section className='testimonial small-section'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<Slider {...settings} className='testimonial-slider'>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/avtar.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/2.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/avtar.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/avtar.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/avtar.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='media'>
									<div className='text-center'>
										<img src='../assets/images/avtar.jpg' alt='#' />
										<h5>Mark Jecno</h5>
										<h6>Designer</h6>
									</div>
									<div className='media-body'>
										<p>
											you how all this mistaken idea of denouncing pleasure and
											praising pain was born and I will give you a complete
											account of the system, and expound the actual teachings.
										</p>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
