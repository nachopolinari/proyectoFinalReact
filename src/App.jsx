import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import CartPages from './components/pages/cartPages/cartPages';
import NotFound404 from './components/NotFound404/NotFound404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Hello World'} titulo={'item List Container'} />}/>
                <Route path='/detalle' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartPages /> }/>
                <Route path='/404' element={<NotFound404/>} />


                <Route path='*' element={<Navigate to='/404'/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App
