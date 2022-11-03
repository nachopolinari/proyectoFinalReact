import { useState } from 'react'

import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';


function App() {

    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting= {'Hello World'} titulo={'item List Container'}/>
            <ItemDetailContainer/>
        </div>
    )
}

export default App
