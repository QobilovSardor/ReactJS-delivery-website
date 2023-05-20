import React, {useState} from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';

function RecipeItem(props) {
	const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = props;
	const [showRecipe, setShowRecipe] = useState(false);
	// showRecipe = () => {

	// }

	return (
		<div>
			<div className="col-lg-6">
				<div className='all-restaurants__box'>
					<div className="product-slider__box">
						<div className="product-slider__box-img pr">
							<img src={strMealThumb} alt="" />
						</div>
						<div className="product-slider__box-content mt10">
							<h2>{strMeal}</h2>
							{strArea ? <h4 className='df ai-center gap-1'><AiOutlineGlobal /> {strArea}</h4> : null}
							<h4 className='df ai-center gap-1'><BiCategory /> {strCategory}</h4>
							<p className='product-slider__box-descr mt10'>{strInstructions}</p>
							<button className='btn mt20' onClick={() => setShowRecipe(!showRecipe)}>Показать рецепт</button>
							{showRecipe ? (
								<table className='recipe-table mt20'>
									<thead>
										<tr>
											<th>Ингредиент</th>
											<th>Мера</th>
										</tr>
									</thead>
									<tbody>
										{Object.keys(props).map(key => {
											if (key.includes('Ingredient') && props[key]) {
												return (
													<tr>
														<td>{props[key]}</td>
														<td>{props[`strMeasure${key.slice(13)}`]}</td>
													</tr>
												)
											}
										})}
									</tbody>
								</table>
							) : null}
							{strYoutube ? (
								<div>
									<h4 className='mb10'>Смотреть видео</h4>
									<iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} width={"100%"} height={"300px"} allowFullScreen />
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipeItem