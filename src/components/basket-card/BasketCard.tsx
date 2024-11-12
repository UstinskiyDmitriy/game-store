import s from "./BasketCard.module.css";
import { TCardData } from "../../interfaces/cardInterface";
import { LucideTrash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../services/slices/cartSlice";
import LikeButton from "../../ui/like-button/LikeButton";

export default function BasketCard({ id, image, title, price }: TCardData) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    if (count < 5) {
      setCount(count + 1);
      dispatch(incrementQuantity({ id, price: price || 0 })); // Добавляем проверку на undefined
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decrementQuantity({ id, price: price || 0 })); // Добавляем проверку на undefined
    }
  };

  const removeCard = () => {
    dispatch(removeFromCart({ id, count }));
  };

  return (
    <div className={s.card} key={id}>
      <div className={s.card_img_wrapper}>
        <img src={image} alt="" className={s.card_img} />
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
