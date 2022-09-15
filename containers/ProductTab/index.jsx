import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';

const ProductTab = ({ data }) => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		setCategories([...new Set(data.map((item) => item.category))]);
	}, []);
	console.log('categories: ', selectedCategory);
	return (
		<section className='section-b-space pt-0 ratio_asos'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<div className='theme-tab'>
							<ul className='tabs tab-title'>
								<li className='current cursor-pointer'>
									<span
										style={{
											color: !selectedCategory ? '#ff4c3b' : '#2d2a25',
										}}
										onClick={() => setSelectedCategory(null)}
										role='button'
									>
										All
									</span>
								</li>
								{categories.map((item, index) => (
									<li key={index} className='current'>
										<span
											style={{
												color:
													selectedCategory === item ? '#ff4c3b' : '#2d2a25',
											}}
											onClick={() => setSelectedCategory(item)}
											role='button'
										>
											{item}
										</span>
									</li>
								))}
							</ul>
							<div className='no-slider row'>
								{data
									.filter((item) =>
										!selectedCategory
											? item
											: item.category === selectedCategory
									)
									.map((item, index) => (
										<ProductCard key={index} item={item} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductTab;
