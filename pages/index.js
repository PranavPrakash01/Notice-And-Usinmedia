import Head from 'next/head'
import HomeStyles from '../styles/Home.module.css'
import UsInMedia from '../components/UsInMedia'
import Notices from '../components/Notices'

export default function Home() {
  return (
    <div className={HomeStyles.container1}>
     
      <Notices/>
      <UsInMedia/>
      
    </div>
  )
}
