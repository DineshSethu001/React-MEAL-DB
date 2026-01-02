import axios from "axios";
const BASE = "https://www.themealdb.com/api/json/v1/1"

// meal categories
export const fetchCategories = ()=> axios.get(`${BASE}/categories.php`);

// Filter by Category

export const fetchMealsByCategory = (cat)=> axios.get(`${BASE}/filter.php?c=${cat}`)

// Lookup full meal details by id

export const fetchMealById = (id)=>axios.get(`${BASE}/lookup.php?i=${id}`)

// Search meal by name
export const searchMeals = (query)=>axios.get(`${BASE}/search.php?s=${query}`)