import { NewTaskInput } from './components/NewTaskInput'
import { TasksList } from './components/TasksList'
import { TasksProvider } from './hooks/useTasksContext'

export function App() {
  return (
    <TasksProvider>
      <h1>Todo List</h1>
      <NewTaskInput />
      <TasksList />
    </TasksProvider>
  )
}
