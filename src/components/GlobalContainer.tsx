import { Header } from './Header'
import { Footer } from './Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { IGlobalContainerProps } from '@/Types/components/GlobalContainerTypes'

export const GlobalContainer = ({ children }: IGlobalContainerProps) => {
  return (
    <>
      <Header />
      <main className="m-auto min-h-screen max-w-[1300px] p-3">{children}</main>
      <ToastContainer />
      <Footer />
    </>
  )
}
