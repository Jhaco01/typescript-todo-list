import './SingleTodo.css'
import { Todo } from '../../models/models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react';

interface Props {
    index: number,
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo : React.FC<Props> = ({index, todo, todos, setTodos}) => {
    
  const handleDone = (id : number) => {
    setTodos(todos.map( (todo) => {
        return todo.id === id ? {...todo, isDone: !todo.isDone} : todo;
    } ))
  }

  const handleDelete = (id : number) => {
    setTodos(todos.filter(todo => todo.id !== id) );
  }

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const editInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
  
    editInput.current?.focus();
  
  }, [edit])
  

  const handleEdit = ( e : React.FormEvent<HTMLFormElement>, id : Number ) => {
      
      e.preventDefault();

      setTodos( prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, todo: editTodo } : todo ) );

      setEdit(false);

  }

  return (
        <form 
          className="todos__single" 
          onSubmit={(e)=>handleEdit(e,todo.id)} 
        >

        {
          edit ? (
            <input
              ref={editInput}
              className="todos__single--text" 
              value={editTodo} 
              onChange={ (e) => setEditTodo(e.target.value) } 
            />
          ) : (            
              todo.isDone?
              <s className="todos__single--text">{todo.todo}</s> : 
              <span className="todos__single--text">{todo.todo}</span>            
          )  
        }
        <div>
            <span className="icon"  onClick={ () => {
              if (!edit && !todo.isDone) {
                  setEdit(prevEdit => !prevEdit)                  
              }
            } } >
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
)}

