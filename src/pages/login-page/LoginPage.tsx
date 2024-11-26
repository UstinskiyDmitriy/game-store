import { FormEvent, useState, useRef } from 'react';
import s from './LoginPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';
import { clearError, login } from '../../services/slices/authSlice';

interface LoginProps {
  closeModal: () => void;
}

function Login({closeModal}:LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.error);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if(error === '') {
      closeModal()
    }
  };

  return (
    <div className={s.authContainer}>
      <div className={s.formContainer} ref={modalRef}>
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
      </div>
    </div>
  );
}

export default Login;
