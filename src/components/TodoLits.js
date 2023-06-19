import React from 'react'
import TodoElements from './TodoElements'



const TodoLits =({todo,handelDelet,checkedElement})  => {

console.log('=> ici notre toro ',  todo)
  return (
    <div>   
{
  todo.map((e)=>  <TodoElements  minitodo={e} handelDelet={handelDelet} checkedElement={checkedElement} />)
}


</div>
  )
}


export default TodoLits