import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

 const [title, setTitle]= useState('')

  const handleSubmitAddTodo = (e) => { 
    e.preventDefault();
    if(!title.trim()){
      return setTitle('');
    }
    createTodo(title);
    setTitle('')
    
   }
    return(
        <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 transition-all duration-1000 overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 mt-8">
        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
        <input
          type="text"
          placeholder="create a new todo..."
          className="dark:bg-gray-800 dark:text-gray-300 w-full text-black-500 outline-none transition-all duration-1000"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    )
 }
 export default TodoCreate