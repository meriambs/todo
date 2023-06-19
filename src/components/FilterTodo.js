import React from 'react'

const FilterTodo = () => {
  return (
    <div> <div className="newItem__select">
    <select className="filter">
      <option value="all">ALL</option>
      <option value="undo">Undo</option>
      <option value="completed">Completed</option>
    </select>
  </div></div>
  )
}

export default FilterTodo