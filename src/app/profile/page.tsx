import { useGetUser } from '@/hooks/useGetUser'
import Image from 'next/image'
import ImageDefault from '/public/user-default.png'

const Profile = async () => {
  const { session } = await useGetUser()
  return (
    <div className="m-auto flex h-screen w-full max-w-[400px] flex-col gap-4 p-5">
      <div className="flex flex-col items-center justify-center">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={`Foto do usuário ${session.user.name}`}
            className="rounded-full"
            height={220}
            width={220}
          />
        ) : (
          <Image
            src={ImageDefault}
            alt={`Foto do usuário ${session?.user?.name}`}
            className="rounded-full"
            height={240}
            width={240}
          />
        )}
      </div>
      <div className="flex flex-col text-center">
        {session?.user?.name && (
          <h1 className="font-title text-xl font-bold">
            {session?.user?.name}
          </h1>
        )}
        {session?.user?.email && (
          <span className="font-body text-sm font-medium italic">
            {session?.user?.email}
          </span>
        )}
      </div>
      <div className="mx-auto flex w-[200px] flex-col gap-1 text-center">
        <h2 className=" font-title text-lg font-bold">Tarefas</h2>
        <div className="flex w-full justify-between ">
          <p className="font-body text-sm font-medium">
            Pendentes: <span>5</span>
          </p>
          <p className="font-body text-sm font-medium">
            Conclúidas: <span>5</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
