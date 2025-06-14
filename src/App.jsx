import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [todolist , settodolist] = useState([])
  let saveTodolist = (event)=>{
    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
   let finalDolist=[...todolist,toname]
   settodolist(finalDolist)
    }
    else{
      alert("Todo name already add")
  
    }
    event.preventDefault();
  }
 let listi = todolist.map((value,index)=>{
  return(
  <List value={value} key = {index}  indexNumber = {index} 
  todolist={todolist} 
  settodolist={settodolist}
  />

  )
 })
  return (
 
<>
<h1 className='header'>TO-DO List</h1>
<form onSubmit={saveTodolist} >
  <input type="text" name="toname" id="" />
  <button>Save </button>
</form>
<div className="outerdive">
<ul>
{listi}
  
</ul>
</div>
    </>
  )
}

export default App
function List({value, indexNumber , todolist ,settodolist }){
  let [status, setstatus] = useState(false)
  let deletrow=()=>{
    let finallist = todolist.filter((v,i)=>i!=indexNumber) 
    settodolist(finallist)
   }
   
   let checkStatus=()=>{
setstatus(!status)
   }
  return(

    <li className={(status)? 'Completetodo':""} onClick={checkStatus}>
    {indexNumber + 1}{value} <span onClick={deletrow}>&times;</span>
  </li>
  )
}