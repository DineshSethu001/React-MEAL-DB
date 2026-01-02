import { useEffect, useState } from "react";

const STORAGE_KEY = "mealdb_favorites";

const loadFavoritesFromStorage=()=>{
    try{
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw):[];
    }
    catch(err){
        console.log("Failed to parse favorites from localStorage",err)
        return [];
    }
}


export default function useFavorites(){
    const [favorites, setFavorites]=useState(loadFavoritesFromStorage);
   useEffect(()=>{
    try{
localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }
    catch(err){
        console.log("failed to save favorites")
    }
   },[favorites])

   const toggle=(meal)=>{
    setFavorites((prev)=>{
        const exists=prev.some((m)=>m.idMeal === meal.idMeal);
        return exists
        ?prev.filter((m)=>m.idMeal !== meal.idMeal)
        :[...prev,meal];
    })
   }
   const isFavorite=(meal)=>favorites.some((m)=>m.idMeal === meal.idMeal);
   return {favorites, toggle, isFavorite}
}