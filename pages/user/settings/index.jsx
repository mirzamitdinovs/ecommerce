import Breadcrumb from 'components/Breadcrumb'

const Settings = () => {
	return (
		<>
			<Breadcrumb title={'profile'} />
			<section className='contact-page register-page'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<h3>PERSONAL DETAIL</h3>
							<form className='theme-form'>
								<div className='form-row row'>
									<div className='col-md-6'>
										<label htmlFor='name'>First Name</label>
										<input
											type='text'
											className='form-control'
											id='name'
											placeholder='Enter Your name'
											required
										/>
									</div>
									<div className='col-md-6'>
										<label htmlFor='email'>Last Name</label>
										<input
											type='text'
											className='form-control'
											id='last-name'
											placeholder='Email'
											required
										/>
									</div>
									<div className='col-md-6'>
										<label htmlFor='review'>Phone number</label>
										<input
											type='text'
											className='form-control'
											id='review'
											placeholder='Enter your number'
											required
										/>
									</div>
									<div className='col-md-6'>
										<label htmlFor='email'>Email</label>
										<input
											type='text'
											className='form-control'
											id='email'
											placeholder='Email'
											required
										/>
									</div>
									<div className='col-md-12'>
										<label htmlFor='review'>Write Your Message</label>
										<textarea
											className='form-control mb-0'
											placeholder='Write Your Message'
											id='exampleFormControlTextarea1'
											rows={6}
											defaultValue={''}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Settings
