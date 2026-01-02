import { Children, createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext()
const STORAGE_KEY = "mealdb_favorites";

const loadFavoritesFromStorage = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch (err) {
        console.log("Failed to parse favorites from localStorage", err)
        return [];
    }
}

export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState(loadFavoritesFromStorage)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
        }
        catch (err) {
            console.log("failed to save favorites")
        }
    }, [favorites])
    const toggle = (meal) => {
        setFavorites((prev) => {
            const exists = prev.some((m) => m.idMeal === meal.idMeal);
            return exists
                ? prev.filter((m) => m.idMeal !== meal.idMeal)
                : [...prev, meal];
        })
    }
    const isFavorite = (id) => favorites.some((m) => m.idMeal === id);
    return <FavoritesContext.Provider value={{ favorites, toggle, isFavorite }}>
        {children}
    </FavoritesContext.Provider>
}
export const useFavorites = () => {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error("Something went wrong")
    }
    return context;
}