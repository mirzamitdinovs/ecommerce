import QuickViewContext from 'contexts/QuickViewContext';
import { useContext, useEffect, useState } from 'react';
import { PARSE_PRICE } from 'helpers';
import CartContext from 'contexts/CartContext';
const QuickView = () => {
	const { toggleQuickView, quickViewProduct, closeQuickView } =
		useContext(QuickViewContext);
	const { cart, addCartProduct, isInCart, updateCartProduct } =
		useContext(CartContext);
	const [color, setColor] = useState(null);
	const [size, setSize] = useState(null);
	const [qty, setQty] = useState(1);
	const [inCart, setInCart] = useState(false);

	const addToCart = (p) => {
		const product = {
			slug: p.slug,
			image: p.images[0],
			name: p.name,
			price: PARSE_PRICE(p.price, p.sales),
			qty: qty,
			color: color,
			size: size,
		};
		addCartProduct(product);
		close();
	};
	const updateCart = (p) => {
		const product = {
			slug: p.slug,
			image: p.images[0],
			name: p.name,
			price: PARSE_PRICE(p.price, p.sales),
			qty: qty,
			color: color,
			size: size,
		};
		updateCartProduct(product);
		close();
	};

	const close = () => {
		setColor(null);
		setSize(null);
		setQty(1);
		closeQuickView();
	};

	useEffect(() => {
		if (quickViewProduct) {
			const inCartProduct = isInCart(quickViewProduct.slug);
			if (inCartProduct) {
				setColor(inCartProduct.color);
				setSize(inCartProduct.size);
				setQty(inCartProduct.qty);
				setInCart(true);
			}
		}
	}, [quickViewProduct]);

	if (!toggleQuickView) return null;
	return (
		<div
			style={{
				zIndex: 888,
				position: 'absolute',
				top: 0,
				left: 0,
				display: 'flex',
				alignItems: 'center',
				height: '100vh',
				width: '100%',
			}}
		>
			<div
				onClick={() => close()}
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
					background: 'black',
					opacity: '40%',
				}}
			></div>
			<div className='modal-dialog modal-lg ' role='document'>
				<div className='modal-content quick-view-modal'>
					<div className='modal-body'>
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						>
							<button
								type='button'
								className='btn btn-danger '
								onClick={() => closeQuickView()}
							>
								<span aria-hidden='true'>×</span>
							</button>
						</div>
						<div className='row'>
							<div className='col-lg-6 col-xs-12'>
								<div className='quick-view-img'>
									<img
										src={quickViewProduct.images[0]}
										alt=''
										className='img-fluid blur-up lazyload'
									/>
								</div>
							</div>
							<div className='col-lg-6 rtl-text'>
								<div className='product-right'>
									<h2>{quickViewProduct.name}</h2>
									<h3>
										$
										{PARSE_PRICE(
											quickViewProduct.price,
											quickViewProduct.sales
										)}
									</h3>
									<ul className='color-variant'>
										{quickViewProduct.colors?.map((item, index) => (
											<li
												className={color === item ? 'active' : ''}
												onClick={() => setColor(item)}
												key={index}
												style={{
													background: item,
												}}
											/>
										))}
									</ul>
									<div className='border-product'>
										<h6 className='product-title'>product details</h6>
										<p>{quickViewProduct.description}</p>
									</div>
									<div className='product-description border-product'>
										<div className='size-box'>
											<ul>
												{quickViewProduct.sizes?.map((item, index) => (
													<li
														className={size === item ? 'active' : ''}
														onClick={() => setSize(item)}
														key={index}
													>
														<a>{item}</a>
													</li>
												))}
											</ul>
										</div>
										<h6 className='product-title'>quantity</h6>
										<div className='qty-box'>
											<div className='input-group'>
												<span className='input-group-prepend'>
													<button
														type='button'
														className='btn quantity-left-minus'
														onClick={() => setQty(qty - 1)}
														disabled={qty === 1}
													>
														<i className='ti-angle-left' />
													</button>{' '}
												</span>
												<span className='form-control input-number'>{qty}</span>
												<span className='input-group-prepend'>
													<button
														type='button'
														className='btn quantity-right-plus'
														onClick={() => setQty(qty + 1)}
													>
														<i className='ti-angle-right' />
													</button>
												</span>
											</div>
										</div>
									</div>
									<div className='product-buttons'>
										{inCart ? (
											<button
												disabled={!color || !size}
												onClick={() => updateCart(quickViewProduct)}
												className='btn btn-solid'
											>
												update cart
											</button>
										) : (
											<button
												disabled={!color || !size}
												onClick={() => addToCart(quickViewProduct)}
												className='btn btn-solid'
											>
												add to cart
											</button>
										)}
										<a href='#' className='btn btn-solid'>
											view detail
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickView;
