import Button from "./components/Button";
import Tasks from "./pages/Tasks";
import { FaCalendarCheck, FaListAlt } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import React, { useState } from "react";
import img from "../assets/img/logo.png";
import { TaskProvider } from "./taskStore";
import PopUp from "./components/PopUp";
function App() {
  const [active, setActive] = useState(false);
  const [tasks, setTask] = useState([]);
  const [completed, setCompleted] = useState([]);
  const addTask = (title, desc) => {
    setTask([
      ...tasks,
      {
        id: Date.now(),
        heading: title,
        subHeading: desc,
        isComplete: false,
      },
    ]);
  };
  const updateTask = (id, head, subHead) => {
    setTask((prevTask) => {
      return prevTask.map((elem) =>
        elem.id === id
          ? {
              id: elem.id,
              heading: head,
              subHeading: subHead,
              isComplete: elem.isComplete,
            }
          : elem
      );
    });
  };
  const deleteTask = (id) => {
    setTask(tasks.filter((elem) => elem.id !== id));
  };
  const markComplete = (id) => {
    const element = tasks.find((elem) => elem.id === id);
    setCompleted([...completed, element]);
    deleteTask(id);
  };
  return (
    <>
      <TaskProvider
        value={{
          tasks,
          completed,
          addTask,
          updateTask,
          deleteTask,
          markComplete,
        }}
      >
        <div className="h-screen w-screen bg-bgColor p-[2px] flex">
          <div className="h-full w-[10%] sm:w-[15%] border-r border-borderDark">
            <div className="h-[8%] border-b border-borderDark ">
              <div className="h-full w-full flex flex-col justify-center items-start sm:pl-2">
                <img
                  src={img}
                  className="sm:hidden h-[5vh] w-[5vh]"
                  alt="logo"
                />
                <h1 className="headG font-Monts text-xl sm:text-2xl md:text-3xl hidden sm:block">
                  ZenDo
                </h1>
                <p className="subG font-dancingScript text-lg hidden sm:block">
                  your tasks, streamlined
                </p>
              </div>
            </div>
            <div className="h-[90%] relative">
              <div className="sm:flex sm:flex-col pt-3 sm:p-2 grid gap-2 text-base xl:text-lg font-Inter">
                <Button
                  className="hidden sm:block"
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  Add Task +
                </Button>
                <Button className="hidden sm:block">My Tasks</Button>
                <Button className="sm:hidden h-[9vw] w-[9vw] m-auto`">
                  {" "}
                  <FaListAlt className="text-2xl text-center w-full" />{" "}
                </Button>
                <Button className="hidden sm:block">Completed</Button>
                <Button className="sm:hidden h-[9vw] w-[9vw] m-auto`">
                  {" "}
                  <FaCalendarCheck className="text-2xl text-center w-full" />{" "}
                </Button>
              </div>
              <div className="flex justify-center pb-2 md:pb-0 md:block md:pl-2 absolute bottom-0 w-full">
                <span className="flex gap-3 items-center">
                  <button className="rounded-full border-none profile h-[8vw] w-[8vw]   md:h-[40px] md:w-[40px] overflow-hidden">
                    <img
                      src="https://i1.sndcdn.com/avatars-001040350189-hn54or-t500x500.jpg"
                      alt="profile"
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <p className="text-primaryText text-lg hidden md:block">
                    user 999
                  </p>
                </span>
                <p className="text-center text-secondaryText pt-3 hidden md:block">
                  &copy; all rights reserved 2025
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-[90%] sm:w-[85%]">
            <div className="pl-2 h-[8%] border-b border-borderDark flex flex-col justify-center items-start ">
              <h1 className="subG font-Inter text-xl sm:text-2xl md:text-3xl">
                Tasks
              </h1>
              <p className=" text-gray-400 text-base sm:text-lg md:text-xl">
                tasks : {}
              </p>
            </div>
            <div className="h-[90%] w-full overflow-hidden relative">
              <Tasks></Tasks>
              <Button className="absolute bottom-5 right-5 border border-gray-500 sm:hidden">
                <MdFormatListBulletedAdd className="text-white h-[9vw] w-[9vw]" />
              </Button>
            </div>
          </div>
        </div>
        <PopUp value={{ active, setActive }}></PopUp>
      </TaskProvider>
    </>
  );
}

export default App;
