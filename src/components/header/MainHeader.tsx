import {GalleryVerticalEnd, Gamepad2, Heart, House } from "lucide-react";
import { useState } from "react";
import s from "./MainHeader.module.css";
import CartButton from "../../ui/cart-button/CartButton";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store/store";
import { Link } from "react-router-dom";
import SearchInput from "../../ui/search-input/SearchInput";
import { useMediaQuery } from "react-responsive";
import AuthModal from "../auth-modal/AuthModal";
import DropDown from "../dropdown-user-menu/DropDown";

function MainHeader() {
  const user = useSelector((state:RootState) => state.user.currentUser)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isDropdownVisible, setDropDownVisible] = useState(false)
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.cart.length
  );
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleDropdown = () => setDropDownVisible((prev) => !prev);
  const closeDropdown = () => { setDropDownVisible(false)}

  return (
    <header className={s.header}>
      <button className={s.catalog}><GalleryVerticalEnd/>{!isMobile && 'Каталог'}</button>
      <div></div>
      <Link to="/" className={s.main_logo}>
        {!isMobile && (
          <>
            <Gamepad2 size={64} />
            <h3>Game</h3>
          </>
        )}
        {isMobile && <House size={26} className={s.main_logo}/>}
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
          <>
           {isModalVisible && !user && <AuthModal closeModal={closeModal}/>}
           <div className={s.user} onClick={user ? toggleDropdown : openModal}>
             <img
               src="https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek="
               alt="avatar"
               loading="lazy"
               onClick={openModal}
             />
             <p>{user ? user.name : "Гость"}</p>
           </div>
           {user && isDropdownVisible && (
              <DropDown closeDropdown={closeDropdown}/>
           )}
           
          </>
            
        )}
       
      </div>
    </header>
  );
}

export default MainHeader;
