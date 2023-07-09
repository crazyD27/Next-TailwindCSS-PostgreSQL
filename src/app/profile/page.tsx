import Image from 'next/image'
import ImageDefault from '/public/profile-default.png'
import { useGetUser } from '@/hooks/useGetUser'
import ProfileStats from '@/components/ProfileStats'

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
            height={200}
            width={200}
          />
        ) : (
          <Image
            src={ImageDefault}
            alt={`Foto do usuário ${session?.user?.name}`}
            className="rounded-full"
            height={200}
            width={200}
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
      <ProfileStats />
    </div>
  )
}

export default Profile
