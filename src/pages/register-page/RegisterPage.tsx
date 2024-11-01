import { FormEvent, useState } from 'react';
import s from './RegisterPage.module.css';

interface RegisterPageProps {
  setShowLogin: (show: boolean) => void;
}

function Register({ setShowLogin }: RegisterPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Пароли не совпадают!");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: { email: string; }) => u.email === email);

    if (existingUser) {
      setError("Пользователь с такой почтой уже существует!");
      return;
    }

    const newUser = {
      email,
      password,
      isAuth: true
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    window.location.reload();
  };

  return (
    <div className={s.authContainer}>
      <div className={s.formContainer}>
        <h2 className={s.title}>Регистрация</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={s.input}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={s.input}
            type="password"
            placeholder="Подтвердить пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className={s.button} type="submit">
            Зарегистрироваться
          </button>
        </form>
        {error && <p className={s.error}>{error}</p>}
        <p className={s.switchText}>
          Уже есть аккаунт?
          <button 
            className={s.switchButton} 
            onClick={() => setShowLogin(true)}
          >
            Войти
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;