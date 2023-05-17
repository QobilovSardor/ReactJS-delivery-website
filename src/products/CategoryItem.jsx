import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';


function CategoryItem(props) {
	const { strMeal, strMealThumb, idMeal } = props;

	return (
		<div className="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-6 mb20">
			<div className="product h100">
				<div className='product-left h100'>
					<div className="pizza h100">
						<div className="pizza-card">
							<div className="pizza-card-img pr">
								<div className='pr'>
									<img src={strMealThumb} alt="" />
								</div>
								<div className='mt20 mb20'>
									<h3 className="fw400">{strMeal}</h3>
								</div>
							</div>
							<div className="pizza-card-about">
								<Link to={`/meal/${idMeal}`} className="purchase fw500 c-white">Смотреть рецепт</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryItem