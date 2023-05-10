import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ data = [] }) {
	
	return (
		<div className='container'>
			{/* {data.map(product => (
				<ProductItem key={product.idCategory} {...product} />
      ))} */}
		</div>
	)
}

export default ProductList