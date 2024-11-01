import { useState } from "react";
import {
  Calendar,
  Gamepad2,
  Heart,
  KeyboardIcon,
  LogOut,
  MessageCircleMore,
  SlidersHorizontal,
  TrendingUp,
  Users,
  Menu,
} from "lucide-react";
import s from "./sideBar.module.css";
import { Link } from "react-router-dom";

interface AsideProps {
  handleLogout: () => void
}

export default function SideBar({handleLogout}:AsideProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={s.menuButton}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <Menu size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className={s.overlay} onClick={toggleSidebar}></div>}

      <aside className={`${s.main} ${isOpen ? s.open : ""}`}>
        {!isOpen && (
          <div className={s.header}>
            <Gamepad2 size={64} />
            <h3>play</h3>
          </div>
        )}

        <div className={s.links}>
          <ul>
            <Link
              to="/"
              className={s.side_link}
              onClick={() => setIsOpen(false)}
            >
              <KeyboardIcon />
              <p>Главная</p>
            </Link>
            <Link
              to="/favorites"
              className={s.side_link}
              onClick={() => setIsOpen(false)}
            >
              <Heart />
              <p>Желаемое</p>
            </Link>
            <Link
              to="/news"
              className={s.side_link}
              onClick={() => setIsOpen(false)}
            >
              <TrendingUp />
              <p>Новости</p>
            </Link>
            <Link
              to="#"
              className={s.side_link}
              
            >
              <Calendar />
              <p>Скоро</p>
            </Link>
          </ul>

          <ul>
            <Link
              to="#"
              className={s.side_link}
            >
              <Users />
              <p>Сообщество</p>
            </Link>
            <Link
              to="#"
              className={s.side_link}
            >
              <MessageCircleMore />
              <p>Общение</p>
            </Link>
          </ul>

          <ul>
            <Link
              to="#"
              className={s.side_link}
             
            >
              <SlidersHorizontal />
              <p>Настройки</p>
            </Link>
            <Link
              to="#"
              className={s.side_link}
             onClick={handleLogout}
            >
              <LogOut />
              <p>Выйти</p>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
}
