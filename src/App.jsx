import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting= {'Hello World'} titulo={'item List Container de App'}/>
        </div>
    )
}

export default App
