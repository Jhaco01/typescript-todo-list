import './SingleTodo.css'
import { Todo } from '../../models/models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo : React.FC<Props> = ({todo, todos, setTodos}) => {
    
  const handleDone = (id : number) => {
    setTodos(todos.map( (todo) => {
        return todo.id === id ? {...todo, isDone: !todo.isDone} : todo;
    } ))
  }

  const handleDelete = (id : number) => {
    setTodos(todos.filter(todo => todo.id !== id) );
  }

  return (
    <form className="todos__single">
        {
        todo.isDone?
        <s className="todos__single--text">{todo.todo}</s> : 
        <span className="todos__single--text">{todo.todo}</span>
        }
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id) }>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id) }>
                <MdDone />
            </span>
        </div>
    </form>
  )
}
