export interface ITasksProps {
  id: string
  title: string
  status: string
  dateConclusion: string
  description: string
  createdAt: Date
  color: string
  userId: string
}

export interface IFormProps {
  title: string
  dateConclusion: string
  description: string
}

export interface IUseTasksProps {
  tasks: ITasksProps[] | undefined
  finishTask: (id: string) => void
  deleteTask: (id: string) => void
  createTask: (task: IFormProps) => void
  loadingCreate: boolean
}
