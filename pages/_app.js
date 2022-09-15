import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import '../styles/globals.css';
import Navbar from 'containers/Navbar';
import Footer from 'containers/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<meta name='description' content='multikart' />
				<meta name='keywords' content='multikart' />
				<meta name='author' content='multikart' />
				<link
					rel='icon'
					href='../assets/images/favicon/1.png'
					type='image/x-icon'
				/>
				<link
					rel='shortcut icon'
					href='../assets/images/favicon/1.png'
					type='image/x-icon'
				/>
				<title>Multikart - Multi-purpopse E-commerce Html Template</title>

				<link href='../../css?family=Lato:300,400,700,900' rel='stylesheet' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='../../css2?family=Yellowtail&display=swap'
					rel='stylesheet'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/fontawesome.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
					integrity='sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=='
					crossorigin='anonymous'
					referrerpolicy='no-referrer'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/slick.css'
				/>
				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/slick-theme.css'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/animate.css'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/themify-icons.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.0/themify-icons.css'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/vendors/bootstrap.css'
				/>

				<link rel='stylesheet' type='text/css' href='../assets/css/style.css' />
			</Head>
			<div
				className='theme-color-1'
				style={{
					overflow: 'hidden',
				}}
			>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>

			<Script
				strategy='afterInteractive'
				src='../assets/js/jquery-3.3.1.min.js'
			></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/jquery-ui.min.js'
			></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/jquery.exitintent.js'
			></Script>

			<Script strategy='afterInteractive' src='../assets/js/slick.js'></Script>

			<Script strategy='afterInteractive' src='../assets/js/menu.js'></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/lazysizes.min.js'
			></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/bootstrap.bundle.min.js'
			></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/bootstrap-notify.min.js'
			></Script>

			<Script
				strategy='afterInteractive'
				src='../assets/js/fly-cart.js'
			></Script>

			<Script strategy='afterInteractive' src='../assets/js/script.js'></Script>
		</>
	);
}

export default MyApp;
