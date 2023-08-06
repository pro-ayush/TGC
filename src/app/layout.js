import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Home/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Triple Gems Construction',
  description: 'A Construction and Renovation company which deals with appliances , remodels and custom homes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className ={`${inter.className} px-20`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
