const Banner = ({ image, topTitle, title, text }) => {
	return (
		<section className='p-0'>
			<div className='full-banner parallax text-center p-left'>
				<img src={image} alt='' className='bg-img blur-up lazyload' />
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<div className='banner-contain'>
								<h2>{topTitle}</h2>
								<h3>{title}</h3>
								<h4>{text}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
