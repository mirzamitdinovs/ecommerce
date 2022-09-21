import { useState } from 'react';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('email: ', email);
	};
	return (
		<section className='pwd-page section-b-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 m-auto'>
						<h2>Forget Your Password</h2>
						<form onSubmit={handleSubmit} className='theme-form'>
							<div className='form-row row'>
								<div className='col-md-12'>
									<input
										value={email}
										type='email'
										onChange={(e) => setEmail(e.target.value)}
										className='form-control'
										id='email'
										placeholder='Enter Your Email'
										required
									/>
								</div>
								<input
									className='btn btn-solid w-auto'
									type='submit'
									value='Submit'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
