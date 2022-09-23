import QuickView from 'components/QuickView';
import Footer from 'containers/Footer';
import Layout from 'containers/Layout';
import Navbar from 'containers/Navbar';
import { CartProvider } from 'contexts/CartContext';
import { QuickViewProvider } from 'contexts/QuickViewContext';
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

			<CartProvider>
				<QuickViewProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</QuickViewProvider>
			</CartProvider>

			<Script
				strategy='beforeInteractive'
				src='assets/js/lazysizes.min.js'
			></Script>

			<Script
				strategy='lazyOnload'
				src='assets/js/bootstrap.bundle.min.js'
			></Script>
		</>
	);
}

export default MyApp;
