import React, { useEffect, useState } from 'react'
import LoadingSpinner  from '../components/LoadingSpinner.jsx'
import { fetchCategories } from '../api/mealdb.js'
import { Link } from "react-router-dom"
const Home = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        fetchCategories()
            .then((res) => {
                // console.log(res)
                setCategories(res.data.categories)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    if (loading) return <LoadingSpinner />

    return (
        <div className='max-w-6xl mx-auto p-3'>
            <div className="text-center mb-10 mt-3">
                <h1 className='text-2xl text-emerald-900 md:text-3xl tracking-widest font-[pacifico]'>Browser Meal Category</h1>
                <p className=' tracking-widest font-[pacifico] mt-3 text-lg text-[#FF9B2F]  '>Discover delicious from around the world</p>
                <hr className='border-b-2 w-[10%] mx-auto text-[#DC143C] mt-3 rounded-lg' />

            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <Link to={`/category/${cat.strCategory}`} key={cat.idCategory} className='group cursor-pointer'>
                        <div className="shadow group-hover:shadow-lg  transition duration-300 hover:scale-105 rounded">
                            <img src={cat.strCategoryThumb} alt={cat.strCategory} className='w-full rounded-lg ' />
                            <p className='tracking-widest font-[pacifico] mt-2 font-semibold text-[#DC143C] text-center transition'>{cat.strCategory}</p>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Home
