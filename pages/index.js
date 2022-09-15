import Banner from 'components/Banner';
import Title from 'components/Title';
import Brands from 'containers/Brands';
import Hero from 'containers/Hero';
import Instagram from 'containers/Instagram';
import ProductSlider from 'containers/ProductSlider';
import ProductTab from 'containers/ProductTab';
import Sales from 'containers/Sales';
import Services from 'containers/Services';
import productsData from 'data/products.data';

export default function Home() {
	return (
		<div>
			<Hero />
			<Sales />
			<Title
				topTittle={'special offer'}
				title='Latest Drops'
				text="Looking for the latest trends in clothing, shoes and
								accessories? Welcome to our 'Latest Drops' edit, bringing you
								all the latest styles from all your fave brands."
			/>
			<ProductSlider data={productsData} />

			<Banner
				image='../assets/images/parallax/1.jpg'
				topTitle='2022'
				title='Fashion trends'
				text='special offer'
			/>

			{/* Tab product */}
			<Title topTittle='exclusive products' title='everyday casual' />
			<ProductTab data={productsData} />
			<Services />

			<Instagram />

			<Brands />

			<div id='fb-root' />
			{/* Your customer chat code */}
			<div
				className='fb-customerchat'
				attribution='setup_tool'
				page_id={2123438804574660}
				theme_color='#0084ff'
				logged_in_greeting='Hi! Welcome to PixelStrap Themes  How can we help you?'
				logged_out_greeting='Hi! Welcome to PixelStrap Themes  How can we help you?'
			></div>
		</div>
	);
}
