import React, { useState } from 'react'
import FilterTodo from './FilterTodo'
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({handelAdd}) => {
const [inputText,setInputText]=useState('')
const handel=()=>{
  handelAdd({
    id:uuidv4(),
    text:inputText,
    checked:false
  });
  setInputText('')
}


  return (
    <div> <form className="newItem">
    <div className="newItem__input">
      <input type="text"  placeholder="Add item..." value={inputText}  onChange={(e)=>setInputText(e.target.value)}    />
<button  onClick={()=>handel()} type='button'  >add</button>  

 </div>
   <FilterTodo/>
  </form></div>
  )
}

export default AddTodo