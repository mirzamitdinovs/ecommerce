import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addCartProduct = (product) => {
		setCart([...cart, product]);
	};

	const removeCartProduct = (slug) => {
		const sorted = cart.filter((item) => item.slug !== slug);
		setCart(sorted);
	};

	const updateCartQty = (slug, qty) => {
		setCart(
			cart.map((item) =>
				item.slug === slug
					? {
							...item,
							qty: qty,
					  }
					: item
			)
		);
	};

	const updateCartProduct = (p) => {
		setCart(cart.map((item) => (item.slug === p.slug ? p : item)));
	};

	const getTotalPrice = () => {
		const total = cart
			.map((item) => item.qty * item.price)
			.reduce((a, b) => a + b, 0);
		return total.toFixed(2);
	};

	const getTotalAmount = () => {
		return cart.map((item) => item.qty).reduce((a, b) => a + b, 0);
	};

	const isInCart = (slug) => {
		return cart.find((item) => item.slug === slug);
	};
	return (
		<CartContext.Provider
			value={{
				cart,
				addCartProduct,
				removeCartProduct,
				updateCartProduct,
				updateCartQty,
				getTotalAmount,
				getTotalPrice,
				isInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
