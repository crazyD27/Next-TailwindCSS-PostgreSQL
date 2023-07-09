import { MenuTools } from '@/components/MenuTools'
import { ShowTasks } from '@/components/ShowTasks'

export default async function Home() {
  return (
    <div className="mt-3 flex w-full flex-col justify-center gap-6 pb-20">
      <MenuTools />
      <ShowTasks />
    </div>
  )
}
