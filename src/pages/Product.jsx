import React, { useEffect, useContext } from "react";
import { Star } from "react-feather";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../actions/productAction";
import { ProductContext } from "../context/productsContext";

const Product = () => {

    const { productId } = useParams()

    const [state, dispatch] = useContext(ProductContext);

    useEffect(() => {
        fetchOneProduct(dispatch, productId)
    }, [])


    let content;

    if (state.loading) {
        content = <div>Loading</div>
        console.log("inside the if block");
    } else {
        content = (<div className="flex flex-col md:flex-row justify-around items-center">

            <div>
                <img src={state.product.image} alt="Dummy Img" className="w-60 my-8 h-full object-scale-down" />
            </div>
            <div className="flex flex-col md:w-1/2 w-10/12  ">
                <h2 className="font-semibold text-2xl text-center md:text-left ">
                    {state.product.title}
                </h2>
                <p className="font-light text-lg mt-2 text-center md:text-left">
                    {state.product.description}
                </p>
                <div className="mt-4">
                    <div className="text-3xl my-2  text-black mt-2 font-bold text-left">${state.product.price}</div>
                    <div className="flex items-center justify-start gap-2">
                        <div className="flex rounded-lg items-center justify-center w-16  bg-red-900 text-white gap-1 ">
                            {state.product.rating?.rate}
                            <div className="w-4 h-4">
                                <Star className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-gray-300">({state.product.rating?.count})</div>
                    </div>
                </div>
                <button className="bg-transparent mt-10 -mb-4  text-black font-semibold  py-2 px-4 border border-black  rounded-xl">
                    Add To Cart
                </button>
                <button className="bg-red-500 mt-10 md:mb-4 hover:bg-red-700 text-white font-bold py-2 px-4 border rounded-xl">
                    Buy Now
                </button>
            </div>
        </div>)
    }

    return (

        <>
            {content}
        </>
    );
};

export default Product;
