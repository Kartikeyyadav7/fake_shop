import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductsContext';
import { fetchProducts } from '../actions/productAction';
import ProductCard from '../components/ProductCard';

function AllProducts() {
    const [state, dispatch] = useContext(ProductContext);

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
        console.log('in the next state after loading the products');
        content = state.products?.map((product) => {
            return <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} category={product.category} image={product.image} rating={product.rating} />
        })
    }

    return (
        <div>
            <div className='flex lg:flex-row justify-around items-center flex-wrap'>
                {content}
            </div>
        </div>
    )
}

export default AllProducts