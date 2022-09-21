import { PARSE_PRICE } from 'helpers';
import ReactStars from 'react-stars';
import Link from 'next/link';
const ProductCard = ({ item }) => {
	return (
		<div className='product-box px-2'>
			<div className='img-wrapper'>
				<div className='front'>
					<Link href={`/products/${item.slug}`}>
						<a>
							<img
								src={item.images[0]}
								className='img-fluid blur-up lazyload bg-img'
								alt=''
							/>
						</a>
					</Link>
				</div>
				<div className='back'>
					<Link href={`/products/${item.slug}`}>
						<a>
							<img
								src={item.images[1]}
								className='img-fluid blur-up lazyload bg-img'
								alt=''
							/>
						</a>
					</Link>
				</div>
				<div className='cart-info cart-wrap'>
					<button
						data-bs-toggle='modal'
						data-bs-target='#addtocart'
						title='Add to cart'
					>
						<i className='ti-shopping-cart' />
					</button>
					<a href='javascript:void(0)' title='Add to Wishlist'>
						<i className='ti-heart' aria-hidden='true' />
					</a>
					<a
						href='#'
						data-bs-toggle='modal'
						data-bs-target='#quick-view'
						title='Quick View'
					>
						<i className='ti-search' aria-hidden='true' />
					</a>
				</div>
			</div>
			<div className='product-detail'>
				<div className='rating'>
					<ReactStars
						count={5}
						value={item.rating}
						edit={false}
						size={20}
						color2={'#FFA811'}
					/>
				</div>
				<Link href={`/products/${item.slug}`}>
					<a>
						<h6>{item.name}</h6>
					</a>
				</Link>
				<h4>${PARSE_PRICE(item.price, item.sales)}</h4>
				<ul className='color-variant'>
					<li className='bg-light0' />
					<li className='bg-light1' />
					<li className='bg-light2' />
				</ul>
			</div>
		</div>
	);
};

export default ProductCard;
