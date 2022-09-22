import ProductCard from 'components/ProductCard';
import categoryData from 'data/category.data';
import { useEffect, useState } from 'react';

const ProductTab = ({ data }) => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		setCategories(categoryData);
	}, []);
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
													selectedCategory === item.id ? '#ff4c3b' : '#2d2a25',
											}}
											onClick={() => setSelectedCategory(item.id)}
											role='button'
										>
											{item.name}
										</span>
									</li>
								))}
							</ul>
							<div className='no-slider row'>
								{data
									.filter((item) =>
										!selectedCategory
											? item
											: item.category.id === selectedCategory
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
