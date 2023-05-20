import React from 'react'
import BacketListItem from './BacketListItem'

function Backet({addToBacked = Function.prototype, meals = []}) {
	// console.log(meals, "salom");
	return (
		<div>
			{meals.map((meal, id) => (
				<BacketListItem key={meal.id} {...meal} addToBacked={addToBacked} />
			))}
		</div>
	)
}

export default Backet