import s from './App.module.css';
import AboutGame from './pages/about-page/AboutPage';
import FavoritesPage from './pages/favorites-page/FavoritesPage';
import HomePage from './pages/home-page/HomePage';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/news-page/NewsPage';
import MainHeader from './components/header/MainHeader';
import CartPage from './pages/cart-page/CartPage';

function App() {

  // Логирован если пользователь не зарегестрирован
  // const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  // const handleLogout = () => {
  //   localStorage.removeItem('currentUser');
  //   window.location.reload();
  // };

  // if (currentUser === null) {
  //   return <Login />;
  // }
  
  return (
    <div className={s.main}>
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about/:id' element={<AboutGame />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
  );
}

export default App;