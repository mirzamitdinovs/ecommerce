import Link from 'next/link';
const Navbar = () => {
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
									<a href='javascript:void(0)' onclick='openNav()'>
										<div className='bar-style'>
											<i
												className='fa fa-bars sidebar-bar'
												aria-hidden='true'
											/>
										</div>
									</a>
									<div id='mySidenav' className='sidenav'>
										<a
											href='javascript:void(0)'
											className='sidebar-overlay'
											onclick='closeNav()'
										/>
										<nav>
											<div onclick='closeNav()'>
												<div className='sidebar-back text-start'>
													<i
														className='fa fa-angle-left pe-2'
														aria-hidden='true'
													/>{' '}
													Back
												</div>
											</div>
											<ul id='sub-menu' className='sm pixelstrap sm-vertical'>
												<li>
													{' '}
													<a href='#'>clothing</a>
													<ul className='mega-menu clothing-menu'>
														<li>
															<div className='row m-0'>
																<div className='col-xl-4'>
																	<div className='link-section'>
																		<h5>women's fashion</h5>
																		<ul>
																			<li>
																				<a href='#'>dresses</a>
																			</li>
																			<li>
																				<a href='#'>skirts</a>
																			</li>
																			<li>
																				<a href='#'>westarn wear</a>
																			</li>
																			<li>
																				<a href='#'>ethic wear</a>
																			</li>
																			<li>
																				<a href='#'>sport wear</a>
																			</li>
																		</ul>
																		<h5>men's fashion</h5>
																		<ul>
																			<li>
																				<a href='#'>sports wear</a>
																			</li>
																			<li>
																				<a href='#'>western wear</a>
																			</li>
																			<li>
																				<a href='#'>ethic wear</a>
																			</li>
																		</ul>
																	</div>
																</div>
																<div className='col-xl-4'>
																	<div className='link-section'>
																		<h5>accessories</h5>
																		<ul>
																			<li>
																				<a href='#'>fashion jewellery</a>
																			</li>
																			<li>
																				<a href='#'>caps and hats</a>
																			</li>
																			<li>
																				<a href='#'>precious jewellery</a>
																			</li>
																			<li>
																				<a href='#'>necklaces</a>
																			</li>
																			<li>
																				<a href='#'>earrings</a>
																			</li>
																			<li>
																				<a href='#'>wrist wear</a>
																			</li>
																			<li>
																				<a href='#'>ties</a>
																			</li>
																			<li>
																				<a href='#'>cufflinks</a>
																			</li>
																			<li>
																				<a href='#'>pockets squares</a>
																			</li>
																		</ul>
																	</div>
																</div>
																<div className='col-xl-4'>
																	<a href='#' className='mega-menu-banner'>
																		<img
																			src='../assets/images/mega-menu/fashion.jpg'
																			alt=''
																			className='img-fluid blur-up lazyload'
																		/>
																	</a>
																</div>
															</div>
														</li>
													</ul>
												</li>
												<li>
													{' '}
													<a href='#'>bags</a>
													<ul>
														<li>
															<a href='#'>shopper bags</a>
														</li>
														<li>
															<a href='#'>laptop bags</a>
														</li>
														<li>
															<a href='#'>clutches</a>
														</li>
														<li>
															{' '}
															<a href='#'>purses</a>
															<ul>
																<li>
																	<a href='#'>purses</a>
																</li>
																<li>
																	<a href='#'>wallets</a>
																</li>
																<li>
																	<a href='#'>leathers</a>
																</li>
																<li>
																	<a href='#'>satchels</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													{' '}
													<a href='#'>footwear</a>
													<ul>
														<li>
															<a href='#'>sport shoes</a>
														</li>
														<li>
															<a href='#'>formal shoes</a>
														</li>
														<li>
															<a href='#'>casual shoes</a>
														</li>
													</ul>
												</li>
												<li>
													<a href='#'>watches</a>
												</li>
												<li>
													{' '}
													<a href='#'>Accessories</a>
													<ul>
														<li>
															<a href='#'>fashion jewellery</a>
														</li>
														<li>
															<a href='#'>caps and hats</a>
														</li>
														<li>
															<a href='#'>precious jewellery</a>
														</li>
														<li>
															{' '}
															<a href='#'>more..</a>
															<ul>
																<li>
																	<a href='#'>necklaces</a>
																</li>
																<li>
																	<a href='#'>earrings</a>
																</li>
																<li>
																	<a href='#'>wrist wear</a>
																</li>
																<li>
																	{' '}
																	<a href='#'>accessories</a>
																	<ul>
																		<li>
																			<a href='#'>ties</a>
																		</li>
																		<li>
																			<a href='#'>cufflinks</a>
																		</li>
																		<li>
																			<a href='#'>pockets squares</a>
																		</li>
																		<li>
																			<a href='#'>helmets</a>
																		</li>
																		<li>
																			<a href='#'>scarves</a>
																		</li>
																		<li>
																			{' '}
																			<a href='#'>more...</a>
																			<ul>
																				<li>
																					<a href='#'>accessory gift sets</a>
																				</li>
																				<li>
																					<a href='#'>travel accessories</a>
																				</li>
																				<li>
																					<a href='#'>phone cases</a>
																				</li>
																			</ul>
																		</li>
																	</ul>
																</li>
																<li>
																	<a href='#'>belts &amp; more</a>
																</li>
																<li>
																	<a href='#'>wearable</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<a href='#'>house of design</a>
												</li>
												<li>
													{' '}
													<a href='#'>beauty &amp; personal care</a>
													<ul>
														<li>
															<a href='#'>makeup</a>
														</li>
														<li>
															<a href='#'>skincare</a>
														</li>
														<li>
															<a href='#'>premium beaty</a>
														</li>
														<li>
															{' '}
															<a href='#'>more</a>
															<ul>
																<li>
																	<a href='#'>fragrances</a>
																</li>
																<li>
																	<a href='#'>luxury beauty</a>
																</li>
																<li>
																	<a href='#'>hair care</a>
																</li>
																<li>
																	<a href='#'>tools &amp; brushes</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<a href='#'>home &amp; decor</a>
												</li>
												<li>
													<a href='#'>kitchen</a>
												</li>
											</ul>
										</nav>
									</div>
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
											<li
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
											</li>
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
												<span className='cart_qty_cls'>2</span>
												<ul className='show-div shopping-cart'>
													<li>
														<div className='media'>
															<a href='#'>
																<img
																	alt=''
																	className='me-3'
																	src='../assets/images/fashion/product/1.jpg'
																/>
															</a>
															<div className='media-body'>
																<a href='#'>
																	<h4>item name</h4>
																</a>
																<h4>
																	<span>1 x $ 299.00</span>
																</h4>
															</div>
														</div>
														<div className='close-circle'>
															<a href='#'>
																<i className='fa fa-times' aria-hidden='true' />
															</a>
														</div>
													</li>
													<li>
														<div className='media'>
															<a href='#'>
																<img
																	alt=''
																	className='me-3'
																	src='../assets/images/fashion/product/2.jpg'
																/>
															</a>
															<div className='media-body'>
																<a href='#'>
																	<h4>item name</h4>
																</a>
																<h4>
																	<span>1 x $ 299.00</span>
																</h4>
															</div>
														</div>
														<div className='close-circle'>
															<a href='#'>
																<i className='fa fa-times' aria-hidden='true' />
															</a>
														</div>
													</li>
													<li>
														<div className='total'>
															<h5>
																subtotal : <span>$299.00</span>
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
