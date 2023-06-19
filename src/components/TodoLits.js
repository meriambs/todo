import React, { useState } from 'react'
import TodoElements from './TodoElements'



const TodoLits =({todo,handelDelet,checkedElement})  => {
const [sort,setSort]=useState('all')
console.log('=> ici notre toro ',  todo)
  return (
    <div>   

    <button  onClick={()=>setSort('active')}   >Active</button>
    <button onClick={()=>setSort('completed')}  >completed</button>
    <button  onClick={()=>setSort('all')}  >All</button>

<div>
      {/* display all element */}

{
  todo.length > 0 && sort === "all" ?
  todo.map((el)=> <TodoElements  minitodo={el} handelDelet={handelDelet} checkedElement={checkedElement}   />   ):(<h1>"there is nothing to show"</h1>)
}

      {/* display completed element */}

      {
  todo.length > 0 && sort === "completed" ?
  todo.filter((el)=> el.checked === true ).map((el)=> <TodoElements  minitodo={el} handelDelet={handelDelet} checkedElement={checkedElement} />):null
}


      {/* display active element */}

      {
  todo.length > 0 && sort === "active" ?
  todo.filter((el)=> el.checked === false ).map((el)=> <TodoElements  minitodo={el} handelDelet={handelDelet} checkedElement={checkedElement} />):null
}







</div>

          
 
</div>
  )
}


export default TodoLits