import Link from 'next/link';
import React from 'react';

const Page404 = () => {
	return (
		<>
			<section className='p-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='error-section'>
								<h1>404</h1>
								<h2>page not found</h2>
								<Link href='/'>
									<a className='btn btn-solid'>back to home</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Page404;
