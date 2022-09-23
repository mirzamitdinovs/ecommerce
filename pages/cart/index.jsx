import Breadcrumb from 'components/Breadcrumb';

const CartPage = () => {
	return (
		<>
			<Breadcrumb title='Cart' />
			<section className='cart-section section-b-space'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='cart_counter'>
								<div className='countdownholder'>
									Your cart will be expired in
									<span id='timer' /> minutes!
								</div>
								<a
									href='checkout.html'
									className='cart_checkout btn btn-solid btn-xs'
								>
									check out
								</a>
							</div>
						</div>
						<div className='col-sm-12 table-responsive-xs'>
							<table className='table cart-table'>
								<thead>
									<tr className='table-head'>
										<th scope='col'>image</th>
										<th scope='col'>product name</th>
										<th scope='col'>price</th>
										<th scope='col'>quantity</th>
										<th scope='col'>action</th>
										<th scope='col'>total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href='#'>
												<img src='../assets/images/pro3/2.jpg' alt='' />
											</a>
										</td>
										<td>
											<a href='#'>cotton shirt</a>
											<div className='mobile-cart-content row'>
												<div className='col'>
													<div className='qty-box'>
														<div className='input-group'>
															<input
																type='text'
																name='quantity'
																className='form-control input-number'
																defaultValue={1}
															/>
														</div>
													</div>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon'>
															<i className='ti-close' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<div className='qty-box'>
												<div className='input-group'>
													<input
														type='number'
														name='quantity'
														className='form-control input-number'
														defaultValue={1}
													/>
												</div>
											</div>
										</td>
										<td>
											<a href='#' className='icon'>
												<i className='ti-close' />
											</a>
										</td>
										<td>
											<h2 className='td-color'>$4539.00</h2>
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
													<div className='qty-box'>
														<div className='input-group'>
															<input
																type='number'
																name='quantity'
																className='form-control input-number'
																defaultValue={1}
															/>
														</div>
													</div>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon'>
															<i className='ti-close' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<div className='qty-box'>
												<div className='input-group'>
													<input
														type='number'
														name='quantity'
														className='form-control input-number'
														defaultValue={1}
													/>
												</div>
											</div>
										</td>
										<td>
											<a href='#' className='icon'>
												<i className='ti-close' />
											</a>
										</td>
										<td>
											<h2 className='td-color'>$4539.00</h2>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<td>
											<a href='#'>
												<img src='../assets/images/pro3/33.jpg' alt='' />
											</a>
										</td>
										<td>
											<a href='#'>cotton shirt</a>
											<div className='mobile-cart-content row'>
												<div className='col'>
													<div className='qty-box'>
														<div className='input-group'>
															<input
																type='number'
																name='quantity'
																className='form-control input-number'
																defaultValue={1}
															/>
														</div>
													</div>
												</div>
												<div className='col'>
													<h2 className='td-color'>$63.00</h2>
												</div>
												<div className='col'>
													<h2 className='td-color'>
														<a href='#' className='icon'>
															<i className='ti-close' />
														</a>
													</h2>
												</div>
											</div>
										</td>
										<td>
											<h2>$63.00</h2>
										</td>
										<td>
											<div className='qty-box'>
												<div className='input-group'>
													<input
														type='number'
														name='quantity'
														className='form-control input-number'
														defaultValue={1}
													/>
												</div>
											</div>
										</td>
										<td>
											<a href='#' className='icon'>
												<i className='ti-close' />
											</a>
										</td>
										<td>
											<h2 className='td-color'>$4539.00</h2>
										</td>
									</tr>
								</tbody>
							</table>
							<div className='table-responsive-md'>
								<table className='table cart-table '>
									<tfoot>
										<tr>
											<td>total price :</td>
											<td>
												<h2>$6935.00</h2>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
					<div className='row cart-buttons'>
						<div className='col-6'>
							<a href='#' className='btn btn-solid'>
								continue shopping
							</a>
						</div>
						<div className='col-6'>
							<a href='#' className='btn btn-solid'>
								check out
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CartPage;
