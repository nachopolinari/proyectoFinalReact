import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import CartContextProvider from './Context/CartContext';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import CartPage from './components/pages/CartPage/CartPage';
import NotFound404 from './components/NotFound404/NotFound404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Hello World'} titulo={'item List Container'} />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer greeting={'Hello World'} titulo={'item List Container'} />} />
                    <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/404' element={<NotFound404 />} />
                    <Route path='*' element={<Navigate to='/404' />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
)}
export default App
