import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { formateDateToShow } from '@/utils/formateDate'
import DeleteButton from './DeleteButton'

interface ITodoCardProps {
  id: string
  title: string
  dateConclusion: string
  status: string
  color: string
}

export const TodoCard = ({
  id,
  title,
  dateConclusion,
  status,
  color,
}: ITodoCardProps) => {
  return (
    <div
      className="m-auto w-full max-w-[340px] rounded-md p-3 shadow 
      shadow-pink-300 transition-all hover:-translate-y-1"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 font-body text-xs font-medium italic text-zinc-900">
            {formateDateToShow(dateConclusion)}
          </span>
          <DeleteButton id={id} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-title text-2xl text-zinc-900">{title}</span>
          <span className="w-fit rounded-full border border-zinc-600 px-2 py-1 font-body text-xs font-medium capitalize italic text-zinc-900">
            {status}
          </span>
        </div>
        <Link
          href={`task/${id}`}
          className="group flex items-center justify-center gap-1 self-end rounded-md border border-zinc-600 bg-zinc-950 p-2 transition-colors hover:bg-zinc-800"
        >
          <ArrowUpRight size={18} className="text-zinc-50" />
          <span className="text-sm text-zinc-50">Detalhes</span>
        </Link>
      </div>
    </div>
  )
}
