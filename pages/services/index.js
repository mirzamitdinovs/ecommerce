import productsData from 'data/products.data';

export const GET_CATALOG_PRODUCTS = async (category_id) => {
	try {
		const products = productsData.filter(
			(item) => item.category.id === category_id
		);
		return new Promise((res, rej) => {
			setTimeout(() => res(products), 2000);
		});
	} catch (err) {
		console.log('err: ', err.message);
	}
};
