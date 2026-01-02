import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { Home, CategoryMeals, MealDetail, Favorites,SearchResults } from './pages'
import { FavoritesProvider } from './context/FavoriteContext'
const App = () => {
  return (
    <>
    <FavoritesProvider>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/category/:category`} element={<CategoryMeals />} />
        <Route path={`/meal/:id`} element={<MealDetail/>}/>
        <Route path={`/favorites`} element={<Favorites/>} />
        <Route path={`/search`} element={<SearchResults/>}/>
        <Route path="*" element={<h1 className='text-center mt-20 text-5xl text-red-900 '>404 - Not Found</h1>}/>
      </Routes>
      </FavoritesProvider>
    </>
  )
}

export default App