import { useState } from 'react'
import './App.css'
import Cards from './component/cards/cards'
import Hire from './component/hire/hire'

function App() {

  const [name, setName] = useState([])

  const handleCLick = (card) => {
     setName([...name,card])
  }

  return (
    <>
      <div className='container mx-auto flex'>
        <Cards handleCLick={handleCLick}></Cards>
        <Hire name={name}></Hire>
      </div>
    </>
  )
}

export default App
