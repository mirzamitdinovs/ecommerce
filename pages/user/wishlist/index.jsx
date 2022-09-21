import Breadcrumb from 'components/Breadcrumb';
import Link from 'next/link';

const Wishlist = () => {
	return (
		<>
			<Breadcrumb title={'wishlist'} />
			<section className='wishlist-section section-b-space'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12 table-responsive-xs'>
							<table className='table cart-table'>
								<thead>
									<tr className='table-head'>
										<th scope='col'>image</th>
										<th scope='col'>product name</th>
										<th scope='col'>price</th>
										<th scope='col'>availability</th>
										<th scope='col'>action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href='#'>
												<img src='../assets/images/pro3/1.jpg' alt='' />
											</a>
										</td>
										<td>
											<a href='#'>cotton shirt</a>
											<div className='mobile-cart-content row'>
												<div className='col'>
													<p>in stock</p>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon me-1'>
															<i className='ti-close' />
														</a>
														<a href='#' className='cart'>
															<i className='ti-shopping-cart' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<p>in stock</p>
										</td>
										<td>
											<a href='#' className='icon me-3'>
												<i className='ti-close' />{' '}
											</a>
											<a href='#' className='cart'>
												<i className='ti-shopping-cart' />
											</a>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<td>
											<a href='#'>
												<img src='../assets/images/pro3/27.jpg' alt='' />
											</a>
										</td>
										<td>
											<a href='#'>cotton shirt</a>
											<div className='mobile-cart-content row'>
												<div className='col'>
													<p>in stock</p>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon me-1'>
															<i className='ti-close' />
														</a>
														<a href='#' className='cart'>
															<i className='ti-shopping-cart' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<p>in stock</p>
										</td>
										<td>
											<a href='#' className='icon me-3'>
												<i className='ti-close' />{' '}
											</a>
											<a href='#' className='cart'>
												<i className='ti-shopping-cart' />
											</a>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<td>
											<a href='#'>
												<img src='../assets/images/pro3/35.jpg' alt='' />
											</a>
										</td>
										<td>
											<a href='#'>cotton shirt</a>
											<div className='mobile-cart-content row'>
												<div className='col'>
													<p>in stock</p>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon me-1'>
															<i className='ti-close' />
														</a>
														<a href='#' className='cart'>
															<i className='ti-shopping-cart' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<p>in stock</p>
										</td>
										<td>
											<a href='#' className='icon me-3'>
												<i className='ti-close' />{' '}
											</a>
											<a href='#' className='cart'>
												<i className='ti-shopping-cart' />
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='row wishlist-buttons'>
						<div className='col-12'>
							<Link href='/'>
								<a className='btn btn-solid'>continue shopping</a>
							</Link>
							<Link href='/user/checkout'>
								<a className='btn btn-solid'>check out</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Wishlist;
