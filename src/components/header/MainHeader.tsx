import { Bell, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import s from './MainHeader.module.css';

interface User {
  name: string;
  email: string;
  password: string;
  isAuth: boolean;
}

function MainHeader() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      
    }
  }, []);
  return (
    <header className={s.header}>
      <div className={s.right}>
        <Search size={24} />
        <Bell size={24} />
        <div className={s.user}>
          <img
            src="https://cdn1.ozone.ru/s3/multimedia-1/6389933605.jpg"
            alt="avatar"
          />
          <p>{user ? user.name : 'Гость'}</p>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;