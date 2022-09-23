import CategorySidebar from 'containers/CategorySidebar';
import CartContext from 'contexts/CartContext';
import Link from 'next/link';
import { useContext } from 'react';
const Navbar = () => {
	const { cart, removeCartProduct, getTotalAmount, getTotalPrice } =
		useContext(CartContext);
	function openNav() {
		document.getElementById('mySidenav').classList.add('open-side');
	}

	return (
		<header>
			<div className='mobile-fix-option' />
			<div className='top-header'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='header-contact'>
								<ul>
									<li>Welcome to Our store Multikart</li>
									<li>
										<i className='fa fa-phone' aria-hidden='true' />
										Call Us: 123 - 456 - 7890
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-6 text-end d-flex justify-content-end'>
							<ul className='header-dropdown'>
								<li className='mobile-wishlist'>
									<Link href='/user/wishlist'>
										<a>
											<i className='fa fa-heart' aria-hidden='true' />
										</a>
									</Link>
								</li>
								<li className='onhover-dropdown mobile-account'>
									{' '}
									<i className='fa fa-user' aria-hidden='true' />
									My Account
									<ul className='onhover-show-div'>
										<li>
											<Link href='/auth/signin'>
												<a>Login</a>
											</Link>
										</li>
										<li>
											<Link href='/auth/signup'>
												<a>register</a>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='main-menu'>
							<div className='menu-left'>
								<div className='navbar'>
									<a href='javascript:void(0)' onClick={() => openNav()}>
										<div className='bar-style'>
											<i
												className='fa fa-bars sidebar-bar'
												aria-hidden='true'
											/>
										</div>
									</a>

									<CategorySidebar />
								</div>
								<div className='brand-logo'>
									<Link href={'/'}>
										<a>
											<img
												src='../assets/images/icon/logo.png'
												className='img-fluid blur-up lazyload'
												alt=''
											/>
										</a>
									</Link>
								</div>
							</div>
							<div className='menu-right pull-right'>
								<div>
									<div className='icon-nav'>
										<ul>
											{/* <li
												style={{
													width: '700px',
												}}
											>
												<div className='row'>
													<div className='col-xl-12 '>
														<form className='d-flex'>
															<input
																type='text'
																className='form-control'
																id='exampleInputPassword1'
																placeholder='Search a Product'
															/>
															<button type='submit' className='btn btn-primary'>
																<i className='fa fa-search' />
															</button>
														</form>
													</div>
												</div>
											</li> */}
											<li className='onhover-div mobile-setting'>
												<div>
													<img
														src='../assets/images/icon/setting.png'
														className='img-fluid blur-up lazyload'
														alt=''
													/>{' '}
													<i className='ti-settings' />
												</div>
												<div className='show-div setting'>
													<h6>language</h6>
													<ul>
														<li>
															<a href='#'>english</a>
														</li>
														<li>
															<a href='#'>french</a>
														</li>
													</ul>
													<h6>currency</h6>
													<ul className='list-inline'>
														<li>
															<a href='#'>euro</a>
														</li>
														<li>
															<a href='#'>rupees</a>
														</li>
														<li>
															<a href='#'>pound</a>
														</li>
														<li>
															<a href='#'>doller</a>
														</li>
													</ul>
												</div>
											</li>
											<li className='onhover-div mobile-cart'>
												<div>
													<img
														src='../assets/images/icon/cart.png'
														className='img-fluid blur-up lazyload'
														alt=''
													/>{' '}
													<i className='ti-shopping-cart' />
												</div>
												<span className='cart_qty_cls'>{getTotalAmount()}</span>
												<ul className='show-div shopping-cart'>
													{cart.map((item, index) => (
														<li key={index}>
															<div className='media'>
																<div>
																	<img
																		alt=''
																		className='me-3'
																		src={item.image}
																	/>
																</div>
																<div className='media-body'>
																	<h4>{item.name}</h4>

																	<h4>
																		<span>
																			{item.qty} x $ {item.price}
																		</span>
																	</h4>
																</div>
															</div>
															<div
																className='close-circle'
																onClick={() => removeCartProduct(item.slug)}
															>
																<i className='fa fa-times' aria-hidden='true' />
															</div>
														</li>
													))}

													<li>
														<div className='total'>
															<h5>
																subtotal : <span>${getTotalPrice()}</span>
															</h5>
														</div>
													</li>
													<li>
														<div className='buttons'>
															<a href='cart.html' className='view-cart'>
																view cart
															</a>{' '}
															<a href='#' className='checkout'>
																checkout
															</a>
														</div>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
