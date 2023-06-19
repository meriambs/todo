import React,{ useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoLits from './components/TodoLits';






function App() {

  const [todo,setTodo]=useState(
    [{id:1,text:"Booking hotel",checked:false},
    {id:2,text:"Buy Flight tickets",checked:false},
    {id:3,text:"Looking up for landscapes",checked:false},
    {id:4,text:"finir movie App ",checked:false}
  ]
  )

  // func mte3 delete 
  const handelDelet=(id)=>{
    setTodo(
      todo.filter((el)=> el.id !== id )
    )
  }

  // checked element 
  const checkedElement=(id)=>{
setTodo(
  todo.map((el)=> el.id === id ? {...el,checked: !el.checked}:el  )
)
  }

  // add todo ajout d'element fi wiset el tab 
  const handelAdd=(newTodo)=>{
setTodo([...todo,newTodo])
  }
  return (

<div className="todo__wrapper">


  <div className="todo__content">
    <h1>TODO</h1>
   

{/* partie ely lehya bil ajout de data  */}

<AddTodo handelAdd={handelAdd}    />

{/* partie display data  */}
<TodoLits  todo={todo}  handelDelet={handelDelet}  checkedElement={checkedElement}  />







  </div>
</div>

  );
}

export default App;
