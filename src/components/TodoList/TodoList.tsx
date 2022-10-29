import './TodoList.css'
import { Todo } from '../../models/models';
import { SingleTodo } from '../SingleTodo/SingleTodo';

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

  return (

    <div className="container">       
            <div className='todos' >
              <span className="todos__heading"> Tasks </span>
              {singleTodos}              
            </div>                      
    </div>
    
  )
}