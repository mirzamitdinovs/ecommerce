import Breadcrumb from 'components/Breadcrumb';
import Services from 'containers/Services';
import Testimonials from 'containers/Testimonials';

const About = () => {
	return (
		<>
			<Breadcrumb title='About us' />
			<div>
				<section className='about-page section-b-space'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='banner-section'>
									<img
										src='../assets/images/about/about%20us.jpg'
										className='img-fluid blur-up lazyload'
										alt=''
									/>
								</div>
							</div>
							<div className='col-sm-12'>
								<h4>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium
								</h4>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium,
								</p>
								<p>
									On the other hand, we denounce with righteous indignation and
									dislike men who are so beguiled and demoralized by the charms
									of pleasure of the moment, so blinded by desire, that they
									cannot foresee the pain and trouble that are bound to ensue;
									and equal blame belongs to those who fail in their duty
									through weakness of will, which is the same as saying through
									shrinking from toil and pain. These cases are perfectly simple
									and easy to distinguish. In a free hour, when our power of
									choice is untrammelled and when nothing prevents our being
									able to do what we like best, every pleasure is to be welcomed
									and every pain avoided. But in certain circumstances and owing
									to the claims of duty or the obligations of business it will
									frequently occur that pleasures have to be repudiated and
									annoyances accepted. The wise man therefore always holds in
									these matters to this principle of selection: he rejects
									pleasures to secure other greater pleasures, or else he
									endures pains to avoid worse pains.
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* about section end */}
				{/*Testimonial start*/}
				<Testimonials />
				<Services />
			</div>
		</>
	);
};
export default About;
