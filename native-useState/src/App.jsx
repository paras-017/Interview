import { useState } from 'react'

import './App.css'

function Input() {
  // useState: 1st item is for defining a propert and 2nd item is setter function which in queues a req for rerender
  const [list,setList] = useState(["jack", 'John', 'Jill'])
  const [name, setName]=useState('')
   //setName does 2 thing first it set the name and also in queues a rerender request for this particular component
  const AddName=()=>{

   list.push(name)
   setList(list)
  //[here we are not setting list i mean we're not using setList func yet]  When the rerender happens, we get that same list.  And then we print it out. Now that's the big  difference here between scalars and references.  So strings, numbers, and booleans are scalars. You get back a copy of the value  and then that's it, you got the local copy. But when it comes to objects and arrays, JavaScript  manages those by reference. And when you give react a reference to this particular array, it  then holds not the array data. but it holds a reference to that array. And then  it gives us back that same array reference,we then use an in place command push to mutate  that data of that array in place. And that's why as we add more items, when we do a  refresh, we actually get that updated data.The problem is that react has no idea that  we've done that.


  // using setList
  // setList(list)
  // but when we use setList(list) it still doesn't update the list in UI WHY?  So here's the deal. When I call any  setter, when it comes to useState,  it looks at the old value, and it looks at the new  value. And if the old value and new value are the  same, it just says I don't care. Thanks. But you  know, you're not really doing anything. So what  we're doing in this case is where we are giving it  back exactly the same reference as we had before.  So it's looking at those two references and  saying, oh, that's the same array. And so you're   just asking me to do nothing really. And so it  doesn't in-q A rerender request. 


  // in order to make this work is instead of in place,  mutating the array, we create a new array that has  the contents of the old array, plus the new name.  So maybe we do that as we create a new array.  We'll give it all of the old  array, so list in this case,   and then we give it our new name. Now we  don't have to do that push anymore
  setList([...list, name])
}

  return (
    <>
    <ul>
      {list.map(item=>(
         <li key={item}>{item}</li>
      ))}
    </ul>
    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={AddName}>AddName</button>
    </>
  )
}

function App(){
  return(
    <Input/>
  )
}
export default App
