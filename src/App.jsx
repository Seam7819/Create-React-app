import { useState } from 'react'
import './App.css'

function App() {
  
  const [count,setcount] = useState(0);
  const handlButton = () => {
    if (count > 20){
      alert ('stop')
    }else {
      const newCount = count + 1 ;
      setcount(newCount)
    }
    
  }


  return (
    <>
      <div>
        <h3>counnt : {count} </h3>
        <button onClick={handlButton}>
          click me
        </button>
      </div>
    </>
  )
}

export default App
