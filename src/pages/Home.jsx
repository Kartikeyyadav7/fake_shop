import React from 'react'
import Products from '../components/Products'
import Slider from '../components/Slider/Slider'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Slider />
            <h2 className="font-semibold text-2xl my-8 text-center md:text-left ">
                Best Rated Products
            </h2>
            <Products />
            <Link to="/allproducts">
                <button className="bg-transparent my-10   text-black font-semibold  py-2 px-4 border border-black  rounded-xl">
                    See all
                </button>
            </Link>
        </div>
    )
}

export default Home