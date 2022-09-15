import instagramData from 'data/instagram.data';
import Slider from 'react-slick';

const Instagram = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
	};
	return (
		<section className='instagram ratio_square'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-12 p-0'>
						<h2 className='title-borderless'>#whowearwhat</h2>
						<Slider {...settings} className=''>
							{instagramData.map((item, index) => (
								<div key={index}>
									<a
										href='https://instagram.com'
										target={'_blank'}
										rel='noreferrer'
									>
										<div className='instagram-box'>
											{' '}
											<img src={item} className='bg-img' alt='img' />
											<div className='overlay'>
												<i className='fa fa-instagram' aria-hidden='true' />
											</div>
										</div>
									</a>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Instagram;
