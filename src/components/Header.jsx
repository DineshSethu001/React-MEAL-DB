import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const [query, setQuery] = useState('')
    const navigate=useNavigate()

    const handleSearch = async(e)=>{
        e.preventDefault();
        if(!query.trim()) return 
        navigate(`/search?q=${encodeURIComponent(query)}`)
    }
    return (
        <div className='bg-emerald-900 text-white p-4 shadow'>
            <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/" className=' tracking-wider text-xk font-bold'>MealDB</Link>
                    <Link to="/favorites" className='tracking-wider '>Favorites</Link>
                </div>
                <form onSubmit={handleSearch} className='flex gap-3 items-center'>
                    <input onChange={(e)=>setQuery(e.target.value)} value={query} placeholder="Search your meals here" type="text" className="w-48 4 sm:w-64 text-emerald-700 bg-white px-3 py-1 rounded outline-none cursor-pointer"/>
                    <button type="submit" className='rounded tracking-wider bg-[#628141] font-bold hover:text-emerald-700 cursor-pointer px-3 py-1 hover:bg-[#C5D89D]'>Search
                        
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Header