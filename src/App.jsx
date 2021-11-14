import { NewTaskInput } from './components/NewTaskInput'
import { TasksList } from './components/TasksList'
import { TasksProvider } from './hooks/useTasksContext'
import { Header } from './components/Header'

import { ThemeProvider } from 'styled-components'
import { Global } from './styles/Global'
import { useSwitchTheme } from './hooks/useSwitchTheme'

export function App() {
  const { theme, setTheme } = useSwitchTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <TasksProvider>
        <Header theme={theme} setTheme={setTheme} />
        <NewTaskInput />
        <TasksList />
      </TasksProvider>
    </ThemeProvider>
  )
}
