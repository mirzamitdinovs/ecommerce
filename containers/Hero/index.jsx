import Link from 'next/link';
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
			<Slider {...settings} className=''>
				<div>
					<div
						style={{
							backgroundImage: 'url(../assets/images/home-banner/1.jpg',
							height: '720px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						className='home  text-center'
					>
						<div>
							<h4>welcome to fashion</h4>
							<h1>men fashion</h1>
							<Link href={'/catalog/men_cloths'}>
								<a className='btn btn-solid'>shop now</a>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<div
						style={{
							backgroundImage: 'url(../assets/images/home-banner/2.jpg',
							height: '720px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						className='home  text-center'
					>
						<div>
							<h4>welcome to fashion</h4>
							<h1>women fashion</h1>
							<Link href='catalog/women_cloths'>
								<a className='btn btn-solid'>shop now</a>
							</Link>
						</div>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default Hero;
