import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import ListItem from "./ListItem";

function List() {
  const [todos, setTodos] = useContext(DataContext);

  const switchComplete = (id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue
      }
    })
    setTodos(newTodos)
  }


  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}

export default List;
