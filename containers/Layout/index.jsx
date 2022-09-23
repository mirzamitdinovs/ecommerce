import QuickView from 'components/QuickView';
import Footer from 'containers/Footer';
import Navbar from 'containers/Navbar';
import QuickViewContext from 'contexts/QuickViewContext';
import { useContext } from 'react';

const Layout = ({ children }) => {
	const { toggleQuickView } = useContext(QuickViewContext);
	return (
		<>
			<div
				className='theme-color-1'
				style={{
					height: toggleQuickView ? '100vh' : '100%',
					overflow: 'hidden',
				}}
			>
				<div>
					<Navbar />
				</div>
				{children}
				<Footer />
				<QuickView />
			</div>
		</>
	);
};

export default Layout;
