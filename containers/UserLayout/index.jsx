import Link from 'next/link';

const UserLayout = ({ children }) => {
	return (
		<section className='section-b-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<div className='account-sidebar'>
							<a className='popup-btn'>my account</a>
						</div>
						<div className='dashboard-left'>
							<div className='collection-mobile-back'>
								<span className='filter-back'>
									<i className='fa fa-angle-left' aria-hidden='true' /> back
								</span>
							</div>
							<div className='block-content'>
								<ul>
									<li className='active'>
										<Link href='/user/dashboard'>
											<a>Account Info</a>
										</Link>
									</li>

									<li>
										<Link href='/user/orders'>
											<a>My Orders</a>
										</Link>
									</li>
									<li>
										<Link href='/user/wishlist'>
											<a>My Wishlist</a>
										</Link>
									</li>

									<li>
										<Link href='/user/settings'>
											<a>My Account</a>
										</Link>
									</li>

									<li className='last'>
										<Link href='/'>
											<a>Log Out</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{children}
				</div>
			</div>
		</section>
	);
};

export default UserLayout;
