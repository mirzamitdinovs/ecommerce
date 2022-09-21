import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
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
					href='../assets/css/fontawesome.css'
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
					href='../assets/css/themify-icons.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.0/themify-icons.css'
				/>

				<link
					rel='stylesheet'
					type='text/css'
					href='../assets/css/bootstrap.css'
				/>

				<link rel='stylesheet' type='text/css' href='../assets/css/style.css' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
