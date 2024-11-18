// BasketCard.tsx
import s from "./BasketCard.module.css";
import { TCardData } from "../../interfaces/cardInterface";
import { LucideTrash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../services/slices/cartSlice";
import LikeButton from "../../ui/like-button/LikeButton";
import { Link } from "react-router-dom";
import { RootState } from "../../services/store/store";


export default function BasketCard({ id, image, title, price }: TCardData) {
  const dispatch = useDispatch();
  
  // Получаем количество и цену из состояния корзины
  const cartItem = useSelector((state: RootState) => 
    state.cart.cart.find(item => item.id === id)
  );

  const count = cartItem?.count || 1;  // Если товар в корзине не найден, показываем 1

  const handlePlus = () => {
    if (count < 5) {
      dispatch(incrementQuantity({ id }));
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      dispatch(decrementQuantity({ id }));
    }
  };

  const removeCard = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className={s.card} key={id}>
      <div className={s.card_img_wrapper}>
        <Link to={`/about/${id}`}>
          <img src={image} alt="" className={s.card_img} loading="lazy"/>
        </Link>
      </div>
      <div className={s.about_wrapper}>
        <div className={s.title}>
          <h3 className={s.card_title}>{title}</h3>
          <div className={s.buttons}>
            <LikeButton id={id} size={35} />
            <LucideTrash2 size={50} className={s.trash} onClick={removeCard} />
          </div>
        </div>
        <div className={s.price}>
          <div className={s.counter}>
            <div onClick={handleMinus} className={s.minus}>
              <p>-</p>
            </div>
            <div className={s.display}>
              <p>{count}</p>
            </div>
            <div onClick={handlePlus} className={s.plus}>
              <p>+</p>
            </div>
          </div>
          <p>{(price || 0) * count} руб.</p>
        </div>
      </div>
    </div>
  );
}
