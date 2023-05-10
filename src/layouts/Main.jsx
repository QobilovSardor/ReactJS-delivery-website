import React, { useState, useEffect } from 'react';
import TobBar from '../products/TobBar';
import ProductItem from '../products/ProductItem';
import ProductList from '../products/ProductList';

function Main() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			.then(res => res.json())
			.then(data => setData(data.categories))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='main'>
			<TobBar />
			<ProductList data={data} />
			<ProductItem data={data} />
		</div>
	)
}

export default Main