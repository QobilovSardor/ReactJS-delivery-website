import { API_URL } from "./config";

const getAllCategory = async () => {
	const respose = await fetch(API_URL + 'categories.php');
	return await respose.json();
}

const getMealId = async (mealId) => {
	const respose = await fetch(API_URL + 'lookup.php?i=' + mealId)
	return await respose.json();
}

const getFilterCategory = async (categoryName) => {
	const respose = await fetch(API_URL + 'filter.php?c=' + categoryName)
	return await respose.json();
}

const getSearchMeals = async (mealName) => {
	const respose = await fetch(API_URL + 'search.php?s=' + mealName);
	return await respose.json();
}

export { getAllCategory, getMealId, getFilterCategory, getSearchMeals }