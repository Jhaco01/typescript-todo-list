import './TodoList.css'
import { Todo } from '../../models/models';
import { SingleTodo } from '../SingleTodo/SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList : React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  
  const singleTodos = todos.map( (todo, index) => {
    return(
        <SingleTodo 
            index={index}
            todo={todo} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
        />
    )
  })

  const completedTodosArray = completedTodos.map( (todo , index) => {
    return(
        <SingleTodo 
            index={index}
            todo={todo} 
            key={todo.id}
            todos={completedTodos}
            setTodos={setCompletedTodos}
        />
    )
  })

  return (

    <div className="container">
       
       <Droppable droppableId='TodosList'>       
        {
          (provided) => (
            <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Active tasks</span>
              {singleTodos}
              {provided.placeholder}
            </div>                      
          )
        }      
       </Droppable>

       <Droppable droppableId='TodosRemove'>
       
       {
         (provided) => (
           <div className='todos remove' ref={provided.innerRef} {...provided.droppableProps}>
             <span className="todos__heading">Completed tasks</span>
             {completedTodosArray}  
             {provided.placeholder}           
           </div>
         )
       }
      </Droppable>

    </div>
    
  )
}