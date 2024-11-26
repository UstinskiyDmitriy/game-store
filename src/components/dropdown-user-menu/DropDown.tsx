import { useDispatch, useSelector } from 'react-redux'
import s from './DropDown.module.css'
import { RootState } from '../../services/store/store'
import { logout } from '../../services/slices/authSlice'

interface DropDownProps{
  closeDropdown: () => void
}

export default function DropDown({closeDropdown}:DropDownProps) {
  const user = useSelector((state:RootState) => state.user.currentUser)
  const dispatch = useDispatch()

  const Logout = () => {
    dispatch(logout())
  }
  return (
    <>
    <div className={s.overlay} onClick={closeDropdown}></div>
    <div className={s.main}>
      
      <div className={s.about_user}>
        <img src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt="" />
        <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        </div>
      </div>
      <ul className={s.list}>
        <li>
          Мой профиль
        </li>
        <li>
          Баланс: 0 руб.
        </li>
        <li>
          Пополнить Баланс
        </li>
        <li onClick={Logout}>
          Выйти
        </li>
      </ul>
    </div>
    </>
    
  )
}
