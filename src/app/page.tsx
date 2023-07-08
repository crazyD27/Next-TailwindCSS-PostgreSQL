'use client'
import { MenuTools } from '@/components/MenuTools'
import { TodoCard } from '@/components/TodoCard'
import { useTasks } from '@/hooks/useTasks'

export default function Home() {
  const { tasks } = useTasks()

  return (
    <div className="mt-3 flex w-full flex-col justify-center gap-6 pb-20">
      <MenuTools />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks &&
          tasks.map((task) => (
            <TodoCard
              id={task.id}
              title={task.title}
              dateConclusion={task.dateConclusion}
              status={task.status}
              key={task.id}
            />
          ))}
      </div>
    </div>
  )
}
