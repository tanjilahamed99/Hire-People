import { useState } from 'react'
import './App.css'
import Cards from './component/cards/cards'
import Hire from './component/hire/hire'

function App() {

  const [card, setCard] = useState([])
  const [total, setTotal] = useState(0);

  const remaining = 20000 - total
  const handleCLick = (cards, salary, id) => {
    const reWrite = card.find((item) => item.id === id);
    if (reWrite) {
      return alert('already booked')
    } else if (salary < remaining) {
      setCard([...card, cards])
    }
    // money
    let moneyTotal = total + salary;
    if (moneyTotal > 20000) {
      return alert('taka ses')
    } else {
      setTotal(moneyTotal);
    }
  }

  return (
    <>
      <h2 className='text-2xl text-center my-10 font-bold'><span className='text-purple-400'>Film</span> Industry</h2>
      <div className='container mx-auto flex md:flex-row flex-col-reverse justify-center gap-5'>
        <Cards handleCLick={handleCLick}></Cards>
        <Hire card={card} total={total} remaining={remaining}></Hire>
      </div>
    </>
  )
}

export default App
