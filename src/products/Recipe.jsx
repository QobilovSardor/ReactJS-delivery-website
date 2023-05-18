import React, {useState, useEffect} from 'react';
import { getMealId } from '../config/api';
import { useParams } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import Loader from '../layouts/Loader';

function Recipe() {
	const [recipe, setRecipe] = useState([]);
	const {id} = useParams();
	
	useEffect(() => {
		getMealId(id).then(data => setRecipe(data.meals))
	}, [id])

	return (
		<div className='container'>
			{!recipe.length ? <Loader /> : recipe.map(item => (
				<RecipeItem key={item.idMeal} {...item} />
			))}
		</div>
	)
}

export default Recipe