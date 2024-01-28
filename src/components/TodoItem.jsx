import { useState } from 'react';
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
  const [showConfirmation, setShowConfirmation] = useState(false);

  

  const handleRemoveTodo = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    dispatch(removeTodo(index));
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleMarkCompleted = () => {
    dispatch(markCompleted(index));
  };

  const handleMarkIncomplete = () => {
    dispatch(markIncomplete(index));
  };

  return (
    <li className={`flex xl:flex-row xl:items-center justify-between border-b-2 py-2 gap-4 ${todo.completed ? 'opacity-70' : ''}`}>
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span className={`mr-4 ${todo.completed ? 'text-gray-500' : ''}`}>{todo.text}</span>
      </div>

      <div className="space-x-3 ml-8 pr-1">
        <button className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleRemoveTodo}>
          <FaTrash />
        </button>
        {!todo.completed && (
          <button className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleMarkCompleted}>
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleMarkIncomplete}>
            <FaTimes />
          </button>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow">
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button className="mr-2 text-sm bg-red-500 text-white px-2 py-1 rounded" onClick={handleConfirmDelete}>
                OK
              </button>
              <button className="text-sm bg-gray-300 px-2 py-1 rounded" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
