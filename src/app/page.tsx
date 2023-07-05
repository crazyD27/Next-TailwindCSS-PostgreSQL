import { MenuTools } from '@/components/MenuTools'
import { TodoCard } from '@/components/TodoCard'

export default async function Home() {
  return (
    <div className="mt-3 flex w-full flex-col justify-center gap-6">
      <MenuTools />
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  )
}
