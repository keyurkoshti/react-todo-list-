import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Todo from "./components/todo";
import Todocontainer from "./components/Todocontainer";

function App() {

  const [inputVal, setinputVal] = useState()

  const [todos, settodos] = useState([])

  function writetodo(e){
    setinputVal(e.target.value)
  }

  function addtodo(){
    if(inputVal!=''){
      settodos((prevTodos) => [...prevTodos, inputVal])
      setinputVal('')
    }
  }

  function deletetodo(todoindex){
    settodos((prevTodos)=>prevTodos.filter((prevTodos, prevTodosIndex)=>{
      return prevTodosIndex != todoindex
    }))
  }

  return (
    <main>
      <h1>To do list</h1>
      <Input inputVal={inputVal} writetodo={writetodo} addtodo={addtodo}/>

      <Todocontainer todos={todos} deletetodo={deletetodo}/>
    </main>

  )
}

export default App;
