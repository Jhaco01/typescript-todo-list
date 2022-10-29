import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField/InputField';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './models/models';

export const App : React.FC = () => {

  const [todo , setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e : React.FormEvent) => {
      e.preventDefault();
      
      if (todo) {
        setTodos( prevTodos => ( [...prevTodos, {id: Date.now(), todo, isDone: false} ] ) );
        setTodo('');
      }
  }

  return (    

    <div className="App">
      <span className='heading'> Taskify </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
}