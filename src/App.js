import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import logo from './logo.svg';
//import './App.css';


//creamos un array con objetos 
const todos = [
  {text: 'ir al gym',completed:false},
  {text: 'Cocinar almuerzo',completed:false},
  {text: 'Estudiar',completed:false},
]


function App() {
  return (
    //react fragmen un componente para envolver varios componentes
    <React.Fragment>
     <TodoCounter />
      
      {<TodoSearch /> }
      
      <TodoList>
          
        {todos.map(todo => (//con .map estoy renderizando mi array
          <TodoItem key={todo.text} text={todo.text}/>//key es para identificar nuestros todos de mi array en este caso por text,y el text el contenido de cada obj de mi array 
          
        ))}   

      </TodoList> 

      <CreateTodoButton />

      </React.Fragment>
  );
}

export default App;
