import Breadcrumb from 'components/Breadcrumb';
import FilterController from 'containers/FilterController';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import TopController from 'containers/TopController';
import productsData from 'data/products.data';

const ProducsPage = () => {
	return (
		<>
			<div>
				<Breadcrumb title={'Products'} />
				<section className='section-b-space ratio_asos'>
					<div className='collection-wrapper'>
						<div className='container'>
							<div className='row'>
								<FilterController />
								<div className='collection-content col'>
									<div className='page-main-content'>
										<div className='row'>
											<div className='col-sm-12'>
												<div className='collection-product-wrapper'>
													<TopController />
													<div className='product-wrapper-grid'>
														<div className='row margin-res'>
															{productsData.map((item, index) => (
																<div
																	key={index}
																	className='col-xl-3 col-6 col-grid-box'
																>
																	<ProductCard item={item} />
																</div>
															))}
														</div>
													</div>
													<Pagination />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ProducsPage;
