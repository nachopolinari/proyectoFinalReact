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
            <ItemListContainer />
        </div>
    )
}

export default App
