import { FormEvent, useState, useRef } from 'react';
import s from './RegisterPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearError } from '../../services/slices/authSlice';
import { RootState } from '../../services/store/store';

interface RegisterProps {
  closeModal: () => void;
}

function Register({closeModal}:RegisterProps) {
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
    closeModal()
  };


  return (
    <div className={s.authContainer}>
      <div className={s.formContainer} ref={modalRef}>
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
      </div>
    </div>
  );
}

export default Register;
