import './TodoList.css'
import { Todo } from '../../models/models';
import { SingleTodo } from '../SingleTodo/SingleTodo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList : React.FC<Props> = ({todos, setTodos}) => {
  
  const singleTodos = todos.map( todo => {
    return(
        <SingleTodo 
            todo={todo} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
        />
    )
  })

  return (
    <div className='todos'>
        {singleTodos}
    </div>
  )
}