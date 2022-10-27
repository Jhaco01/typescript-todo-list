import {useRef} from 'react'
import './InputField.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e : React.FormEvent)=>void
}

export const InputField : React.FC<Props> = ( {todo, setTodo, handleAdd} ) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
        const { value } = e.target; 
        setTodo(value);        
    }

    const submit = (e : React.FormEvent<HTMLFormElement>) => {
        handleAdd(e);
        inputRef.current?.blur();
    }

  return (
    <form className='input' onSubmit={(e) => submit(e)}> 
        <input 
            ref={inputRef}
            type="input" 
            placeholder='Enter a task' 
            className='input__box' 
            value={todo}
            onChange={(e) => handleChange(e)}
        />
        <button className='input__submit' type='submit' > GO! </button>
    </form>
  )
}

