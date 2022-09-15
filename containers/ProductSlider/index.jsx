import ProductCard from 'components/ProductCard';
import Slider from 'react-slick';

const ProductSlider = ({ data }) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	return (
		<section className='section-b-space pt-0 ratio_asos'>
			<div className='container'>
				<div className='row'>
					<div className='col '>
						<Slider {...settings}>
							{data.map((item, index) => (
								<ProductCard key={index} item={item} />
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductSlider;
