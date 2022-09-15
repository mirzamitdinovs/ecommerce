import Breadcrumb from 'components/Breadcrumb';
import ProductGallery from 'components/ProductGallery';
import ProductAddToCart from 'containers/ProductAddToCart';
import ProductInfoTabs from 'containers/ProductInfoTabs';
import ProductSlider from 'containers/ProductSlider';
import productsData from 'data/products.data';
import { useRouter } from 'next/router';

const ProductDetails = () => {
	const router = useRouter();
	return (
		<>
			<Breadcrumb title='Product' />
			<div>
				{/* section start */}
				<section>
					<div className='collection-wrapper'>
						<div className='container'>
							<div className='row'>
								<ProductGallery />
								<div className='col-lg-4'>
									<div className='product-right product-description-box'>
										<div className='product-count'>
											<ul>
												<li>
													<img
														src='../assets/images/fire.gif'
														className='img-fluid'
														alt='image'
													/>
													<span className='p-counter'>37</span>
													<span className='lang'>orders in last 24 hours</span>
												</li>
												<li>
													<img
														src='../assets/images/person.gif'
														className='img-fluid user_img'
														alt='image'
													/>
													<span className='p-counter'>44</span>
													<span className='lang'>active view this</span>
												</li>
											</ul>
										</div>
										<h2>Women Pink Shirt</h2>
										<div className='border-product'>
											<h6 className='product-title'>product details</h6>
											<p>
												The Model is wearing a white blouse from our stylist's
												collection, see the image for a mock-up of what the
												actual blouse would look like.
											</p>
										</div>
										<div className='single-product-tables border-product detail-section'>
											<table>
												<tbody>
													<tr>
														<td>Febric:</td>
														<td>Chiffon</td>
													</tr>
													<tr>
														<td>Color:</td>
														<td>Red</td>
													</tr>
													<tr>
														<td>Material:</td>
														<td>Crepe printed</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<ProductAddToCart />
							</div>
						</div>
					</div>
				</section>
				<ProductInfoTabs />
				<section className='section-b-space ratio_asos'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 product-related'>
								<h2>related products</h2>
							</div>
						</div>
						<div className='row search-product'>
							<div className='col-md-12'>
								<ProductSlider data={productsData} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ProductDetails;
