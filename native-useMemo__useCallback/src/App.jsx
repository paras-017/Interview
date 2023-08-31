
import { useMemo, useState } from 'react'
import './App.css'

function App() {
   const [numbers] = useState([10,20,30])
   const [names] = useState(['charlie', "alpha", 'zzzz',"bravo"])
   const total = numbers.reduce((cv,n)=>cv+n,0)

  //  Suppose my array is a huge number array. So everytime wehn component re-render it calculate value again and again . So we use useMemo to avoid this. When we should NOT use useMemo for simple calculation like count1+count2
  // MYTH: useMemo is not related to react-Memo. These 2 are different things. useMemo is like use-calculated-value but reactMemo is wwhich memoise componentand is good perfomance enhancement
  const total2 = useMemo(() => numbers.reduce((cv,n)=>cv+n,0), [numbers])
  const sortedNames = useMemo(()=>[...names].sort(),[names])
  return (
    <>
      <h1>UseMemo - think it as use calculated value</h1>
      <div>Total: {total}</div>
      <div>Total: {total2}</div>
      <div>Names: {names.join(' ,')}</div>
      <div>Names: {sortedNames.join(' ,')}</div>
    </>
  )
}

export default App
