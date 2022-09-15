const ProductsSkeleton = () => {
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
								<h2>collection</h2>
							</div>
						</div>
						<div className='col-sm-6'>
							<nav aria-label='breadcrumb' className='theme-breadcrumb'>
								<ol className='breadcrumb'>
									<li className='breadcrumb-item'>
										<a href='index.html'>home</a>
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										collection
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<section className='section-b-space ratio_asos'>
				<div className='collection-wrapper'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-3 collection-filter'>
								{/* side-bar colleps block stat */}
								<div className='collection-filter-block'>
									<div className='filter-block'>
										<h4 className='title-ldr' />
										<ul>
											<li />
											<li />
											<li />
											<li />
										</ul>
									</div>
									<div className='filter-block'>
										<h4 className='title-ldr' />
										<ul>
											<li />
											<li />
											<li />
											<li />
										</ul>
									</div>
									<div className='filter-block'>
										<h4 className='title-ldr' />
										<ul>
											<li />
											<li />
											<li />
											<li />
										</ul>
									</div>
								</div>
								{/* silde-bar colleps block end here */}
								{/* side-bar single product slider start */}
								<div className='theme-card'>
									<h5 className='title-border' />
									<div>
										<div className='product-box'>
											<div className='media'>
												<div className='img-wrapper' />
												<div className='media-body align-self-center'>
													<div className='product-detail'>
														<h4 />
														<h6 />
													</div>
												</div>
											</div>
										</div>
										<div className='product-box'>
											<div className='media'>
												<div className='img-wrapper' />
												<div className='media-body align-self-center'>
													<div className='product-detail'>
														<h4 />
														<h6 />
													</div>
												</div>
											</div>
										</div>
										<div className='product-box'>
											<div className='media'>
												<div className='img-wrapper' />
												<div className='media-body align-self-center'>
													<div className='product-detail'>
														<h4 />
														<h6 />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* side-bar single product slider end */}
								{/* side-bar banner start here */}
								<div className='collection-sidebar-banner' />
								{/* side-bar banner end here */}
							</div>
							<div className='collection-content col'>
								<div className='page-main-content'>
									<div className='row'>
										<div className='col-sm-12'>
											<div className='top-banner-wrapper'>
												<div className='img-ldr-top' />
												<div className='top-banner-content small-section'>
													<h4 />
													<h5 />
													<p />
													<p />
												</div>
											</div>
											<div className='collection-product-wrapper'>
												<div className='product-top-filter'>
													<div className='row m-0 w-100'>
														<div className='col-xl-4'>
															<div className='filter-panel'>
																<h6 className='ldr-text' />
															</div>
														</div>
														<div className='col-xl-4 col-lg-4 col-6'>
															<div className='filter-panel'>
																<h6 className='ldr-text' />
															</div>
														</div>
														<div className='col-xl-2 col-lg-4 col-6'>
															<div className='filter-panel'>
																<h6 className='ldr-text' />
															</div>
														</div>
														<div className='col-xl-2 col-lg-4 d-none d-lg-block'>
															<div className='filter-panel'>
																<h6 className='ldr-text' />
															</div>
														</div>
													</div>
												</div>
												<div className='product-wrapper-grid'>
													<div className='row'>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
														<div className='col-xl-3 col-md-6 col-grid-box'>
															<div className='product-box'>
																<div className='img-wrapper' />
																<div className='product-detail'>
																	<h4 />
																	<h5 />
																	<h6 />
																</div>
															</div>
														</div>
													</div>
												</div>
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
	);
};

export default ProductsSkeleton;