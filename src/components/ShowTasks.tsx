'use client'
import { useTasks } from '@/hooks/useTasks'
import { TodoCard } from './TodoCard'

export const ShowTasks = () => {
  const { tasks } = useTasks()

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks &&
        tasks.map((task) => (
          <TodoCard
            id={task.id}
            title={task.title}
            dateConclusion={task.dateConclusion}
            status={task.status}
            key={task.id}
            color={task.color}
          />
        ))}
    </div>
  )
}
