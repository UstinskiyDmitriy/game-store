import { FormEvent, useState, useEffect, useRef } from 'react';
import s from './LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../services/store/store';
import RegisterPage from '../register-page/RegisterPage';
import { clearError, login } from '../../services/slices/userSlice';

interface LoginPageProps {
  closeModal: () => void;
}

function Login({closeModal}:LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.error);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  if (!showLogin) {
    return <RegisterPage setShowLogin={setShowLogin} closeModal={closeModal}/>;
  }

  return (
    <div className={s.authContainer}>
      <div className={s.formContainer} ref={modalRef}>
        <h2 className={s.title}>Вход</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) dispatch(clearError());
            }}
          />
          <input
            className={s.input}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) dispatch(clearError());
            }}
          />
          <button className={s.button} type="submit">
            Войти
          </button>
        </form>
        {error && <p className={s.error}>{error}</p>}
        <p className={s.switchText}>
          Нет аккаунта?
          <button className={s.switchButton} onClick={() => setShowLogin(false)}>
            Регистрация
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
