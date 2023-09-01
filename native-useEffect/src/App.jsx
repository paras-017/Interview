import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0)
  useEffect(()=>{
   setTimeout(() => {
    console.log(time)
    setTime(time=>time+1)
   }, 1000);
  },[])

  return (
    <>
    <div>
     Time is {time}
    </div>
    </>
  )
}

export default App
