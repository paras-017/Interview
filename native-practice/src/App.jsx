import React from 'react'
import { useState } from 'react'

const App = () => {
  const [list, SetList]=useState(["paras","Anuj","David"])
  const [name,SetName]=useState('')
  const AddName = ()=>{
    SetList([...list, name])
  }
  return (
    <div>
      <ul>
      {list.map(elem=>(<li>{elem}</li>))}
      </ul>
      <input type="text" value={name} onChange={(e)=>SetName(e.target.value)}/>
      <button onClick={AddName}>Submit</button>
    </div>
  )
}

export default App