import { useState } from 'react';

const Signout = () => {
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('values: ', values);
	};
	return (
		<section className='register-page section-b-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h3>create account</h3>
						<div className='theme-card'>
							<form className='theme-form' onSubmit={handleSubmit}>
								<div className='form-row row'>
									<div className='col-md-6'>
										<label htmlFor='email'>First Name</label>
										<input
											type='text'
											className='form-control'
											id='fname'
											name='first_name'
											value={values.first_name}
											onChange={handleChange}
											placeholder='First Name'
											required
										/>
									</div>
									<div className='col-md-6'>
										<label htmlFor='review'>Last Name</label>
										<input
											type='text'
											className='form-control'
											id='lname'
											placeholder='Last Name'
											required
											name='last_name'
											value={values.last_name}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className='form-row row'>
									<div className='col-md-6'>
										<label htmlFor='email'>email</label>
										<input
											type='text'
											className='form-control'
											id='email'
											placeholder='Email'
											required
											name='email'
											value={values.email}
											onChange={handleChange}
										/>
									</div>
									<div className='col-md-6'>
										<label htmlFor='review'>Password</label>
										<input
											type='password'
											className='form-control'
											id='review'
											placeholder='Enter your password'
											required
											name='password'
											value={values.password}
											onChange={handleChange}
										/>
									</div>

									<input
										type='submit'
										className='btn btn-solid w-auto'
										value={'create Account'}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signout;
