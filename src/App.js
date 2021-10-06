import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import { Footer } from './myComponents/Footer';
import { Todos } from './myComponents/Todos';
import { AddTodo } from './myComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { About } from './myComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am onDelete ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted ", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("i am adding this todo ", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myitem = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myitem])
    console.log(myitem);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="Shakti's list" searchBar={true} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/About">
            <About/>
            </Route>
        </Switch>

      <Footer />
   </Router>
    </>
  );
}

export default App;
