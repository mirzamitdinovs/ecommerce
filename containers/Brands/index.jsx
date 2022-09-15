import brandsData from 'data/brands.data';
import Slider from 'react-slick';

const Brands = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<section className='section-b-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<Slider {...settings}>
							{brandsData.map((item, index) => (
								<div key={index} className='logo-block'>
									<a href='#'>
										<img src={item} alt='' />
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

export default Brands;
