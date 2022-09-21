import { useState } from 'react'
const Signin = () => {
	const [value, setValue] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(value)
	}
	return (
		<section className='login-page section-b-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<h3>Login</h3>
						<div className='theme-card'>
							<form onSubmit={handleSubmit} className='theme-form'>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>

									<input
										value={value.email}
										type='text'
										onChange={handleChange}
										className='form-control'
										name='email'
										id='email'
										placeholder='Email'
										required
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='review'>Password</label>
									<input
										value={value.password}
										type='password'
										onChange={handleChange}
										className='form-control'
										name='password'
										id='review'
										placeholder='Enter your password'
										required
									/>
								</div>
								<a href='#' className='btn btn-solid'>
									Login
								</a>
							</form>
						</div>
					</div>
					<div className='col-lg-6 right-login'>
						<h3>New Customer</h3>
						<div className='theme-card authentication-right'>
							<h6 className='title-font'>Create A Account</h6>
							<p>
								Sign up for a free account at our store. Registration is quick
								and easy. It allows you to be able to order from our shop. To
								start shopping click register.
							</p>
							<a href='#' className='btn btn-solid'>
								Create an Account
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signin
