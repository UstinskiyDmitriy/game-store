import { FormEvent, useState } from 'react';
import s from './LoginPage.module.css';
import RegisterPage from '../register-page/RegisterPage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { email: string; }) => u.email === email);

    if (!user) {
      setError('Пользователь не найден');
      return;
    }

    if (user.password !== password) {
      setError('Неверный пароль');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.reload();
  };

  if (!showLogin) {
    return <RegisterPage setShowLogin={setShowLogin} />;
  }

  return (
    <div className={s.authContainer}>
      <div className={s.formContainer}>
        <h2 className={s.title}>Вход</h2>
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
          <button className={s.button} type="submit">
            Войти
          </button>
        </form>
        {error && <p className={s.error}>{error}</p>}
        <p className={s.switchText}>
          Нет аккаунта?
          <button 
            className={s.switchButton} 
            onClick={() => setShowLogin(false)}
          >
            Регистрация
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;