import React, { useState } from 'react';
import Button from './Button'; // Assuming you have a Button component
import { CSSTransition } from 'react-transition-group';
import useTask from '../taskStore';

const PopUp = ({value}) => {
  const {active,setActive} = value;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errMsg , setErrMsg] = useState('');
  
  const {addTask} = useTask();
  function AddTask(title,desc){
    addTask(title,desc)
  }
  const handleSave = () => {
    setErrMsg('');
    if (title.trim() && description.trim()) {
      AddTask(title.slice(0,30),description.slice(0,120));
      setTitle('');
      setDescription('');
      setActive(false);
    } else {
      setErrMsg('Please fill in both fields.');
      setTitle('');
      setDescription('')
    }
  };

  return (
    <CSSTransition
      in={active}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
        <div className="relative w-full max-w-xl p-6 bg-bgColor border border-borderLight text-white rounded-lg shadow-lg">
          {/* Pseudo-element for background blur */}
          <div className="absolute inset-0 bg-bgColor bg-opacity-50 backdrop-blur-5xl rounded-lg"></div>
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Task</h2>
              <button
                className="text-gray-400 text-2xl hover:text-white text-center"
                onClick={()=>{setActive(false)}}
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="task-title">
                Title
              </label>
              <input
                id="task-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter task title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="task-desc">
                Description
              </label>
              <textarea
                id="task-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 text-white resize-none border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter task description"
              />
            </div>
            
            <p className='text-sm text-gray-400 text-center my-2'>
              {errMsg}  
            </p>

            <Button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded"
            >
              Save Task
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PopUp;
