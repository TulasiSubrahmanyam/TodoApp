import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/action';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';



const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();
  
    const handleToggleTodo = () => {
      dispatch(toggleTodo(index));
    };
  
    const handleRemoveTodo = () => {
      dispatch(removeTodo(index));
    };
  
    const handleMarkCompleted = () => {
      dispatch(markCompleted(index));
    };
  
    const handleMarkIncomplete = () => {
      dispatch(markIncomplete(index));
    };

  return (
    <li className={` flex xl:flex-row xl:items-center justify-between border-b-2 py-2 gap-4 ${todo.completed ? 'opacity-75':"" }`}>
    
  
    <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500 ' : ''}`}>
          {todo.text}
        </span>
    </div>
      <div className=' space-x-3 ml-8 pr-1'>
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={handleToggleTodo}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={handleRemoveTodo}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={handleMarkCompleted}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={handleMarkIncomplete}
          >
            <FaTimes />
          </button>
        )}
      </div>
        
 
    </li>
  );
};

export default TodoItem;