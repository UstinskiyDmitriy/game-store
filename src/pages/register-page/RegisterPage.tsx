import { FormEvent, useState, useEffect, useRef } from 'react';
import s from './RegisterPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearError } from '../../services/slices/userSlice';
import { RootState } from '../../services/store/store';

interface RegisterPageProps {
  setShowLogin: (show: boolean) => void;
  closeModal: () => void;
}

function Register({ setShowLogin, closeModal }: RegisterPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.error);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      dispatch(clearError());
      alert("Пароли не совпадают!");
      return;
    }

    dispatch(register({ name, email, password, isAuth: true }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className={s.authContainer}>
      <div className={s.formContainer} ref={modalRef}>
        <h2 className={s.title}>Регистрация</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            placeholder="Имя пользователя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={s.input}
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={s.input}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className={s.input}
            type="password"
            placeholder="Подтвердить пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className={s.button} type="submit">
            Зарегистрироваться
          </button>
        </form>
        {error && <p className={s.error}>{error}</p>}
        <p className={s.switchText}>
          Уже есть аккаунт?
          <button className={s.switchButton} onClick={() => setShowLogin(true)}>
            Войти
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
