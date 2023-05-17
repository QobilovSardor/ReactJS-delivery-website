import React from 'react';
import '../css/style.css';


function CategoryItem(props) {
	const { strMeal, strMealThumb } = props;

	return (
		<div className="product col-lg-2 col-md-4 col-sm-4 col-xs-6 col-6 mb20 ">
			<div className='row product-left'>
				<div className="pizza">
					<div className="pizza-card">
						<div className="pizza-card-img pr">
							<div className='pr'>
								<img src={strMealThumb} alt="" />
							</div>
							<div>
								<div className="price mt15">
									<h6 className="lh20 df ai-center">751₽ <span className="fw500 fs12 db">936₽</span></h6>
								</div>
								<h6 className="fw400 lh16">{strMeal}</h6>
							</div>
						</div>
						<div className="pizza-card-about">
							<button type="button" className="purchase fw500 c-white">Добавить</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryItem