import { createContext, useContext, useEffect, useState } from 'react'

const TasksContext = createContext({})

export function TasksProvider({ children }) {
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    if (localStorage.getItem('@todolisttasks')) {
      const LoadTasks = localStorage.getItem('@todolisttasks')
      setAllTasks(JSON.parse(LoadTasks))
    } else {
      setAllTasks([])
    }
  }, [])

  function AtualizeAllTasks(NewAllTasks) {
    localStorage.setItem('@todolisttasks', JSON.stringify(NewAllTasks))
    setAllTasks(NewAllTasks)
  }

  function newIdGenerator() {
    const id = Math.floor(Math.random() * 999999)
    return id
  }

  return (
    <TasksContext.Provider
      value={{ allTasks, AtualizeAllTasks, newIdGenerator }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  return context
}
