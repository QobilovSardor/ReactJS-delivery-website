import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFilterCategory } from '../config/api';
import Loader from '../layouts/Loader';
import CategoryItem from './CategoryItem';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilterCategory(name).then(data => {
			setMeals(data.meals);
		})
	}, [name]);
	return (
		<div className='container'>
			<div className="row">
				{!meals.length ? <Loader /> : meals.map(meal => (
					<CategoryItem key={meal.idMeal} {...meal} />
				))}
			</div>
		</div>
	)
}

export default Category