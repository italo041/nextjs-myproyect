
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Services } from '../components/Services'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <div>
       <Navbar />
       <Welcome />
       <Services />
    </div>
  )
}
