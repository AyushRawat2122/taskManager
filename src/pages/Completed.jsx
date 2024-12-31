import React from "react";
import useTask from "../taskStore";
import TaskCard from "../components/TaskCard";

const Completed = () => {
    const {completed} = useTask();
  return (
    <div>
      <div className="scrollable w-full h-full overflow-scroll overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {
            completed.map((elem)=> <TaskCard id={elem.id}/> )
        }
      </div>
    </div>
  );
};

export default Completed;
