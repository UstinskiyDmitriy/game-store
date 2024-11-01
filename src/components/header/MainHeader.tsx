import { Bell,Search } from 'lucide-react'
import s from './MainHeader.module.css'
export default function MainHeader() {
  return (
    <header className={s.header}>
            <div className={s.right}>
              <Search size={24}/>
              <Bell size={24}/>
              <div className={s.user}>
                <img src="https://cdn1.ozone.ru/s3/multimedia-1/6389933605.jpg" alt="avatar" />
                <p>Dmitrii</p>
              </div>
            </div>
    </header>
  )
}
