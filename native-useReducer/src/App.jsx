import { useReducer } from 'react'
import './App.css'

function UserForm(){
 const [state, dispatch] = useReducer((state, action)=>{
// combining state and action 
  return {
    ...state, ...action
  }
  },
  {first:"",
  last:""}
  )
  return(
    <>
    <div>
      <input type="text" value={state.first} onChange={e=>dispatch({first:e.target.value})}/>
      <input type="text" value={state.last} onChange={e=>dispatch({first:e.target.value})}/>
    </div>
    </>
  )
}

function NameList() {
  // useReducer is just like useState it return array and 1st item  is state
  const [state, dispatch] = useReducer((state, action)=>{
   switch (action.type) {
    case "SET_NAME":

    //createing new object so that are reference are different
      return {
        ...state,
        name: action.payload
      }
     

      //what if we do like this, this will not work why? => becuaseRefresh, we type and nothing happens. And  again, this is because React is looking at  the references coming out of use reducer.  And saying, hey, this matches the existing  reference. So it can't see it's not going to  compare by contents, it's not going to look   at the inside the object and say, look, the  name is different between these two things,  it's going to look at the reference to the object.  So that's why we have to create a new object here.

      // state.name = action.payload
      // return state         //same reference

    case "ADD_NAME":
        return {
           ...state,
           names: [...state.names, state.name],
           name:''
        }

   } 


  },{                         //same reference
    names:[],                      
    name:""
  })


  return (
    <>
    <ul>
      {state.names.map((name)=>(
       <li>{name}</li>
      ))}
    </ul>
     <input type="text" value={state.name} onChange={e=>dispatch({type:'SET_NAME', payload:e.target.value})}/>
     <div>Name = {state.name}</div>
     <button onClick={()=>dispatch({type:"ADD_NAME"})}>Add</button>
    </>
  )
}

function App(){
  return(
    <>
    <UserForm/>
    <NameList/>
    </>
  )
}

export default App
