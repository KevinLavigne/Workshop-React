import { useState } from 'react'
import { Routes, Route } from 'react-router'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Beers and so More</h1>
    <Routes>
      <Route path='/' element={Home}/>
      <Route path="/beers" element={Beers}/>
    </Routes>
    </div>
  )
}

export default App
