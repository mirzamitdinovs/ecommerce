const Title = ({ topTittle, title, text }) => {
	return (
		<>
			<div className='title1 section-t-space'>
				<h4>{topTittle}</h4>
				<h2 className='title-inner1'>{title}</h2>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 offset-lg-3'>
						<div className='product-para'>
							<p className='text-center'>{text}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Title;
