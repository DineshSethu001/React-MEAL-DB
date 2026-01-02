import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'
import { useFavorites } from '../context/FavoriteContext'


const MealCard = ({ meal }) => {
  const {toggle, isFavorite} = useFavorites();
  const fav=isFavorite(meal.idMeal);
  return (
    <div title={meal.strMeal} className="relative group cursor-pointer rounded-bl-2">
      
      {/* Favorite button (child of group) */}
      <FavoriteButton  meal={meal} onToggle={toggle} isFav={fav}/>

      <Link to={`/meal/${meal.idMeal}`} className='block rounded overflow-hidden  '>
        <div className="
          shadow
          transition-all duration-300
          hover:scale-105
          group-hover:shadow-lg
          rounded
        ">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-lg"
          />

          <p className="
            tracking-widest
            font-[pacifico]
            mt-2
            font-semibold
            text-[#DC143C]
            text-center
          ">
            {meal.strMeal}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default MealCard
