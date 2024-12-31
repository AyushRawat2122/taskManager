import { createContext, useContext } from "react";
const tasksStore = createContext({
    tasks:[],
    completed:[],
    addTask:()=>{

    },
    updateTask:()=>{

    },
    deleteTask:()=>{

    },
    markComplete:()=>{

    }
}); //Initial state

export const TaskProvider = tasksStore.Provider;

export default function useTask(){
    return useContext(tasksStore);
}