import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMeals } from '../api/mealdb';
import LoadingSpinner from '../components/LoadingSpinner';
import MealCard from '../components/MealCard';
const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || "";
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(!query){
      setMeals([]);
      setLoading(false)
      return;
    }
    setLoading(true)
    searchMeals(query)
    .then((res)=>setMeals(res.data.meal || []))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  },[query])
  if (loading) return <LoadingSpinner/>
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">
        Search Results For "{query}"</h1>
        {meals.length === 0?(
          <p className="text-center text-gray-500 mt-20 text-lg">
  No meals found for "{query}"
</p>

        ):
        (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
            {meals.map((meal)=>(
              <MealCard key={meal.idMeal} meal={meal}/>
            ))}
          </div>
        )}
        </div>
  )
}

export default SearchResults