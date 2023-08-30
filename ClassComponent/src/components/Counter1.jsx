import React, { useEffect } from 'react'

const Counter1 = () => {
    useEffect(() => {
      
    
      return () => {
       console.log('removed')
      }
    }, [])
    
  return (
<>
<div>Counter1</div>
<div>Counter1</div>

</>
  )
}

export default Counter1