import { useState } from 'react'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting= {'Hello World'} titulo={'item List Container'}/>
        </div>
    )
}

export default App
