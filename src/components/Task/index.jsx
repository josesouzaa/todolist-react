import React from 'react'
import { useTasks } from '../../hooks/useTasksContext'

import { TaskContent } from './styles'
import deleteImg from '../../assets/delete.svg'

export function Task({ task }) {
  const { allTasks, AtualizeAllTasks } = useTasks()

  function handleCheck() {
    const NewAllTasks = allTasks.map((t) => {
      if (task.id === t.id) {
        t.isComplete = !t.isComplete
      }
      return t
    })
    AtualizeAllTasks(NewAllTasks)
  }

  function handleDelete() {
    const NewAllTasks = allTasks.filter((t) => t.id !== task.id)
    AtualizeAllTasks(NewAllTasks)
  }

  return (
    <TaskContent checked={task.isComplete}>
      <input
        type="checkbox"
        checked={task.isComplete}
        value={task.isComplete}
        onChange={handleCheck}
      />
      <strong>{task.title}</strong>
      <button type="button" onClick={handleDelete}>
        <img src={deleteImg} alt="Deletar" />
      </button>
    </TaskContent>
  )
}
