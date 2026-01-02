import React from 'react'

const FavoriteButton = ({isFav, onToggle, meal}) => {
  // 
  return (
    <button onClick={(e)=>{
      onToggle(meal)
    }}
     className={`cursor-pointer hover:scale-105 absolute right-2 rounded-full top-1 z-10  py-1 px-2.5 font-bold group-hover:opacity-100 transition-opacity duration-300 text-xl ${isFav ?"text-white":" text-gray-700"}`}>{isFav?" ❤️":"🤍"}</button>
  )
}


export default FavoriteButton