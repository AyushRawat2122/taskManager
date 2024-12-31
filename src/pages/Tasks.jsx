import React from 'react';
import TaskCard from '../components/TaskCard'
import useTask from '../taskStore';
const Tasks = () => {
  const {tasks} = useTask();
    return (
        <div className="scrollable w-full h-full overflow-scroll overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {
              tasks.map((elem)=><TaskCard id={elem.id} value={elem}/>)
            }
      </div>
    );
}

export default Tasks;
