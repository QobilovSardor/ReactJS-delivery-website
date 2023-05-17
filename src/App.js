import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import './css/grid.css';
import './css/style.css';
import { Routes, Route } from "react-router-dom";
import ProductPageTwo from "./products/ProductPageTwo";
import NoteFound from "./layouts/NoteFound";
import { getAllCategory, getFilterCategory } from './config/api';
import ProductItem from "./products/ProductItem";
import { useEffect, useState } from 'react'
import Category from "./products/Category";

function App() {
	const [data, setData] = useState([]);
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getAllCategory().then(data => setData(data.categories))
			.catch((error) => console.log(error))
	}, []);

	useEffect(() => {
		getFilterCategory('Beef').then(data => setMeals(data.meals))
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<ProductItem data={data} />} />
				<Route path="/products" element={<ProductPageTwo meals={meals} />} />
				<Route path="/category" element={<Category />} />
				<Route path="*" element={<NoteFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
