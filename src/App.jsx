import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [todos, settodos] = useState()
  const fetchpi = async () => {
    const respon = await fetch(url)
 
 const js = respon.json()
 settodos(js)
 console.log(todos)
  }

  useEffect(() => {
    fetchpi()
   }, [])
  return (
    <div className="App">
    </div>
  )
}

export default App
