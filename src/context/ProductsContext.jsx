import { createContext, useReducer } from "react";


const initialState = {
    loading: true,
    error: '',
    products: {},
    product: {}
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: ''
            };
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: ''
            }
        case 'ERROR_GET_PRODUCT':
            return {
                ...state,
                product: {},
                error: 'Not able to fetch product',
                loading: false
            }
        case 'LOADING_PRODUCT':
            return {
                ...state,
                loading: true
            }
        case 'CLEAN_STATE':
            return {
                ...state,
                product: {},
                // products: {},
                error: '',
                loading: true
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                products: {},
                error: 'Something went wrong'
            }

        default:
            return state
    }
}

const ProductContext = createContext();


const ProductContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductContext.Provider value={[state, dispatch]} >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductContextProvider } 