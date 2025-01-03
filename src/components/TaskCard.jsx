import React, { useState } from "react";
import Button from "./Button";
import { FaBell } from "react-icons/fa";
import useTask from "../taskStore";
const TaskCard = ({ value }) => {
  const ID = value.id;
  const { isComplete, heading, subHeading } = value;
  const { markComplete, updateTask, deleteTask, completed } = useTask();
  const [head, setHead] = useState(heading);
  const [subHead, setSubHead] = useState(subHeading);
  const [enabled, setEnabled] = useState(true);

  function UpdateTask() {
    if (enabled) {
      updateTask(ID, head, subHead);
    }
    setEnabled((prev) => !prev);
  }
  function MarkComplete() {
    markComplete(ID);
    console.log(completed);
  }
  function DeleteTask() {
    deleteTask(ID);
  }
  return (
    <div className="bg-[#171522] p-6 rounded-lg shadow-md m-1 border max-h-72 min-w-64 max-w-[280px] border-borderLight">
      <input
        type="text"
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
        }}
        className={`px-2 block bg-transparent text-2xl capitalize max-w-full text-primaryText font-bold mb-1 font-Monts ${
          !enabled ? "border border-borderLight outline-purple-950" : ""
        }`}
        disabled={enabled}
      />
      <input
        type="text"
        value={subHead}
        className={`p-2 block bg-transparent mb-6 text-base text-slate-400 max-w-full ${
          !enabled ? "border border-borderLight outline-purple-950" : ""
        }`}
        onChange={(e) => {
          setSubHead(e.target.value);
        }}
        disabled={enabled}
      />
      {isComplete ? (
        ""
      ) : (
        <>
          <div className="flex gap-2 mb-4 justify-center">
            <Button className={`animate text-base`} onClick={MarkComplete}>
              Mark Done
            </Button>
            <Button className={`animate text-base`} onClick={DeleteTask}>
              Delete Task
            </Button>
            <Button className={`animate text-base`} onClick={UpdateTask}>
              {!enabled ? "Save Task" : "Edit Task"}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="datetime-local"
              className="bg-gray-800 text-primaryText text-sm py-1 px-2 rounded w-full placeholder-gray-400"
            />
            <Button className={`animate text-base`}>
              <FaBell />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
