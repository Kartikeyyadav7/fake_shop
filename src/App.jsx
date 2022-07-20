import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import { ProductContextProvider } from './context/productsContext'
import AllProducts from './pages/AllProducts'
import FilteredProducts from './pages/FilteredProducts'

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path='/:filteredProducts' element={<FilteredProducts />} />
      </Routes>
    </ProductContextProvider>
  )
}

export default App