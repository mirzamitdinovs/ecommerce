import Footer from 'containers/Footer';
import Navbar from 'containers/Navbar';
import Head from 'next/head';
import Script from 'next/script';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/globals.css';

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

			{/* <Script strategy='afterInteractive' src='../assets/js/menu.js'></Script> */}

			<Script
				strategy='beforeInteractive'
				src='assets/js/lazysizes.min.js'
			></Script>

			<Script
				strategy='lazyOnload'
				src='assets/js/bootstrap.bundle.min.js'
			></Script>

			{/* <Script
				strategy='afterInteractive'
				src='../assets/js/bootstrap-notify.min.js'
			></Script> */}

			{/* <Script
				strategy='afterInteractive'
				src='../assets/js/fly-cart.js'
			></Script> */}

			{/* <Script strategy='afterInteractive' src='../assets/js/script.js'></Script> */}
		</>
	);
}

export default MyApp;
