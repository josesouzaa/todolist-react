import React, { useState } from 'react'
import { useTasks } from '../../hooks/useTasksContext'

import { Container } from './styles'

export function NewTaskInput() {
  const { allTasks, AtualizeAllTasks, newIdGenerator } = useTasks()
  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!newTaskText.match(/^\s*$/)) {
      const newTask = {
        id: newIdGenerator(),
        title: newTaskText,
        isComplete: false
      }
      AtualizeAllTasks([newTask, ...allTasks])
      setNewTaskText('')
    }
  }

  return (
    <Container action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que preciso fazer hoje?"
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </Container>
  )
}
