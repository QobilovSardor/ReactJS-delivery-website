import React, {useState, useEffect} from 'react';
import { getMealId } from '../config/api';
import { useParams } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import Loader from '../layouts/Loader';
import { useNavigate } from 'react-router-dom';

function Recipe() {
	const [recipe, setRecipe] = useState([]);
	const {id} = useParams();
	const navigate = useNavigate();
	
	useEffect(() => {
		getMealId(id).then(data => setRecipe(data.meals))
	}, [id])

	return (
		<div className='container'>
			<div className="back-btn__box mb15 dib">
				<button onClick={() => navigate(-1)} className="back-btn fw400 fs16 df ai-center">
					<svg className="mr10" width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 0L0 3L3 6L3.707 5.293L1.914 3.5H14V2.5H1.914L3.707 0.707L3 0Z" fill="#1E1E1E" />
					</svg>
					Назад
				</button>
			</div>
			{!recipe.length ? <Loader /> : recipe.map(item => (
				<RecipeItem key={item.idMeal} {...item} />
			))}
		</div>
	)
}

export default Recipe