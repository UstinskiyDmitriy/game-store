import { Gamepad2, Heart, House } from "lucide-react";
import { useEffect, useState } from "react";
import s from "./MainHeader.module.css";
import CartButton from "../../ui/cart-button/CartButton";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store/store";
import { Link } from "react-router-dom";
import SearchInput from "../../ui/search-input/SearchInput";
import { useMediaQuery } from "react-responsive";

interface User {
  name: string;
  email: string;
  password: string;
  isAuth: boolean;
}

function MainHeader() {
  const [user, setUser] = useState<User | null>(null);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.cart.length
  );
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className={s.header}>
      <button className={s.catalog}>Каталог</button>
      <Link to="/" className={s.main_logo}>
        {!isMobile && (
          <>
            <Gamepad2 size={64} />
            <h3>play</h3>
          </>
        )}
        {isMobile && <House size={40} className={s.main_logo}/>}
      </Link>

      <div className={s.right}>
        <div className={s.right_icons}>
          <div>
            <Link to="/favorites" className={s.hearts}>
              <Heart size={26} />
            </Link>
          </div>

          <Link to="/cart">
            {cartItemsCount !== 0 ? (
              <div className={s.cart}>
                <p>{cartItemsCount}</p>
                <CartButton />
              </div>
            ) : (
              <div className={s.cart}>
                <CartButton />
              </div>
            )}
          </Link>
          {!isMobile && (
            <div>
              <SearchInput />
            </div>
          )}
        </div>
        {!isMobile && (
             <div className={s.user}>
             <img
               src="https://i.pinimg.com/736x/8c/27/bb/8c27bb7cdc0577caf1f09df5dac9b940.jpg"
               alt="avatar"
             />
             <p>{user ? user.name : "Гость"}</p>
           </div>
        )}
       
      </div>
    </header>
  );
}

export default MainHeader;
