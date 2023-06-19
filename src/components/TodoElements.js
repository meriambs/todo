import React from 'react'

const TodoElements = ({minitodo,handelDelet,checkedElement}) => {

    console.log('minitodo=>',minitodo)
  return (
    <div> <ul className="todo__list">
    <li className="todo__item">
      <input type="checkbox" id="todo-1"   />
      <label for="todo-1">
        <button  onClick={()=>checkedElement(minitodo.id)} >checked</button>
        <span className="item__title" style={minitodo.checked ?{color:"red"}:{color:"gray"}}   >{minitodo.text}</span>
      </label>
<button onClick={()=>handelDelet(minitodo.id)}   >delet</button>    </li>

</ul></div>
  )
}

export default TodoElements