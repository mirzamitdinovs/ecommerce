import Breadcrumb from 'components/Breadcrumb';
import FilterController from 'containers/FilterController';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import TopController from 'containers/TopController';
import productsData from 'data/products.data';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GET_CATALOG_PRODUCTS } from 'pages/services';
import ProductsSkeleton from 'containers/ProductsSkeleton';

const CatalogPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		getProducts(router.query.category_id);
	}, [router]);

	const getProducts = async (id) => {
		if (!loading) {
			setLoading(true);
		}
		const res = await GET_CATALOG_PRODUCTS(id);
		if (res) {
			setProducts(res);
			setLoading(false);
		}
	};

	console.log('products: ', products);

	if (loading) return <ProductsSkeleton />;
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
													{/* <TopController /> */}
													<div className='product-wrapper-grid'>
														<div className='row margin-res'>
															{products.map((item, index) => (
																<div
																	key={index}
																	className='col-xl-3 col-6 col-grid-box'
																>
																	<ProductCard item={item} />
																</div>
															))}
														</div>
													</div>
													{/* <Pagination /> */}
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

export default CatalogPage;
