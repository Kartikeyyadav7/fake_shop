import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductsContext';
import { fetchProducts } from '../actions/productAction';
import ProductCard from '../components/ProductCard';
import { useParams } from "react-router-dom";


function FilteredProducts() {
    const [state, dispatch] = useContext(ProductContext);

    const { filteredProducts } = useParams()

    console.log(filteredProducts);


    useEffect(() => {
        console.log("in the use effect in ");
        fetchProducts(dispatch)
        return () => {
            console.log('in the clean up products');
            dispatch({
                type: 'CLEAN_STATE'
            })
        }
    }, [])


    let content;

    if (state.loading) {
        console.log("in loading in products");
        content = <div>Loading</div>
    } else {
        console.log('--- in else statement ---');
        let filteredProductsByRoute
        if (filteredProducts === "mens") {
            console.log('filtered');
            filteredProductsByRoute = state.products?.filter((product) => product.category === "men's clothing")

        } else if (filteredProducts === 'jewellery') {
            filteredProductsByRoute = state.products?.filter((product) => product.category === "jewelery")

        } else if (filteredProducts === "electronics") {
            filteredProductsByRoute = state.products?.filter((product) => product.category === "electronics")

        } else if (filteredProducts === "womens") {
            filteredProductsByRoute = state.products?.filter((product) => product.category === "women's clothing")
        }
        content = filteredProductsByRoute.map((product) => {
            return <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} category={product.category} image={product.image} rating={product.rating} />
        })
    }

    return (
        <div>
            <h2 className="font-semibold text-2xl ml-8 my-8 text-center md:text-left ">
                {filteredProducts}
            </h2>
            <div className='flex lg:flex-row justify-around items-center flex-wrap'>
                {content}
            </div>
        </div>
    )
}

export default FilteredProducts