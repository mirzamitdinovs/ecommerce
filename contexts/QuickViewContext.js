import { createContext, useState } from 'react';

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
	const [toggleQuickView, setToggleQueickView] = useState(false);
	const [quickViewProduct, setQuickViewProduct] = useState(null);

	const openQuickView = (product) => {
		setQuickViewProduct(product);
		setToggleQueickView(true);
	};
	const closeQuickView = () => {
		setQuickViewProduct(null);
		setToggleQueickView(false);
	};

	return (
		<QuickViewContext.Provider
			value={{
				toggleQuickView,
				quickViewProduct,
				openQuickView,
				closeQuickView,
			}}
		>
			{children}
		</QuickViewContext.Provider>
	);
};

export default QuickViewContext;
