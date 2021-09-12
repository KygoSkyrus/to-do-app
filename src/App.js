import "./App.css";
import Header from "./myComponent/Header";
import { Todos } from "./myComponent/Todos";
import { Addtodo } from "./myComponent/Addtodo";
import { Footer } from "./myComponent/Footer";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//this is the main file..everything else is taking  things from it..this is showing everthings..it has divided itself in part ,,we just use the name here and the rest of things related to the name is in that file.

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Im ondelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    console.log("iam adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Addtodo addtodo={addtodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}
export default App;
