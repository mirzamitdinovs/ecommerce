const ProductDetailsSkeleton = () => {
	return (
		<div className='loader_skeleton'>
			<header>
				<div className='top-header d-none d-sm-block'>
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
							<div className='col-lg-6 text-end'>
								<ul className='header-dropdown'>
									<li className='mobile-wishlist'>
										<a href='#'>
											<i className='fa fa-heart' aria-hidden='true' />
										</a>
									</li>
									<li className='onhover-dropdown mobile-account'>
										<i className='fa fa-user' aria-hidden='true' /> My Account
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
										<a href='javascript:void(0)'>
											<div className='bar-style'>
												<i
													className='fa fa-bars sidebar-bar'
													aria-hidden='true'
												/>
											</div>
										</a>
									</div>
									<div className='brand-logo'>
										<a href='index.html'>
											<img
												src='../assets/images/icon/logo.png'
												className='img-fluid blur-up lazyload'
												alt=''
											/>
										</a>
									</div>
								</div>
								<div className='menu-right pull-right'>
									<div>
										<nav>
											<div className='toggle-nav'>
												<i className='fa fa-bars sidebar-bar' />
											</div>
											<ul className='sm pixelstrap sm-horizontal'>
												<li>
													<div className='mobile-back text-end'>
														Back
														<i
															className='fa fa-angle-right ps-2'
															aria-hidden='true'
														/>
													</div>
												</li>
												<li>
													<a href='index.html'>Home</a>
												</li>
												<li>
													<a href='#'>
														feature<div className='lable-nav'>new</div>
													</a>
												</li>
												<li>
													<a href='#'>shop</a>
												</li>
												<li>
													<a href='#'>product</a>
												</li>
												<li>
													<a href='#'>pages</a>
												</li>
												<li>
													<a href='#'>blog</a>
												</li>
											</ul>
										</nav>
									</div>
									<div>
										<div className='icon-nav d-none d-sm-block'>
											<ul>
												<li className='onhover-div mobile-search'>
													<div>
														<img
															src='../assets/images/icon/search.png'
															onclick='openSearch()'
															className='img-fluid blur-up lazyload'
															alt=''
														/>{' '}
														<i className='ti-search' onclick='openSearch()' />
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
			<div className='breadcrumb-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6'>
							<div className='page-title'>
								<h2>product</h2>
							</div>
						</div>
						<div className='col-sm-6'>
							<nav aria-label='breadcrumb' className='theme-breadcrumb'>
								<ol className='breadcrumb'>
									<li className='breadcrumb-item'>
										<a href='index.html'>Home</a>
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										product
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<section className='section-b-space'>
				<div className='collection-wrapper product-page'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='container-fluid'>
									<div className='row'>
										<div className='col-lg-1 col-sm-2 col-xs-12'>
											<div className='row vertical-product'>
												<div className='col-sm-12 col-4'>
													<div className='sm-product' />
												</div>
												<div className='col-sm-12 col-4'>
													<div className='sm-product' />
												</div>
												<div className='col-sm-12 col-4'>
													<div className='sm-product' />
												</div>
											</div>
										</div>
										<div className='col-lg-3 col-sm-10 col-xs-12 order-up'>
											<div className='main-product sm-img' />
										</div>
										<div className='col-lg-4'>
											<div className='product-right'>
												<h2 />
												<h4 />
												<h3 />
												<ul>
													<li />
													<li />
													<li />
												</ul>
												<div className='btn-group'>
													<div className='btn-ldr' />
													<div className='btn-ldr' />
												</div>
											</div>
										</div>
										<div className='col-lg-4'>
											<div className='product-right product-form-box'>
												<h2 />
												<h4 />
												<h3 />
												<ul>
													<li />
													<li />
													<li />
												</ul>
												<div className='btn-group'>
													<div className='btn-ldr' />
													<div className='btn-ldr' />
												</div>
											</div>
										</div>
									</div>
								</div>
								<section className='tab-product m-0'>
									<div className='row'>
										<div className='col-sm-12 col-lg-12'>
											<ul>
												<li />
												<li />
												<li />
												<li />
											</ul>
											<p />
											<p />
											<p />
											<p />
											<p />
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetailsSkeleton;
