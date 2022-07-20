export const fetchProducts = async (dispatch) => {
    try {
        dispatch({
            type: 'LOADING_PRODUCT'
        })
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json()

        dispatch({
            type: 'FETCH_SUCCESS',
            payload: products
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_ERROR'
        });
    }
}

export const fetchOneProduct = async (dispatch, productId) => {
    try {
        dispatch({
            type: 'LOADING_PRODUCT'
        })
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const product = await res.json()

        dispatch({
            type: 'GET_PRODUCT',
            payload: product
        })
    } catch (error) {
        dispatch({
            type: 'ERROR_GET_PRODUCT',
        })
    }
}