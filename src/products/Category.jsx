import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Category() {
	const { category } = useParams();
	console.log(category, "saslom");
	return (
		<div className='container'>
			
		</div>
	)
}

export default Category