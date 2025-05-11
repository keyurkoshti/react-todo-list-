import React from 'react'
import Todo from './todo'

function Todocontainer({todos, deletetodo}) {
  return (
    <div className='container'>
        {todos.map((todo, index)=>{
            return (
                <Todo todo={todo} index={index} deletetodo={deletetodo}/>
            )
        })}


    </div>
  )
}

export default Todocontainer