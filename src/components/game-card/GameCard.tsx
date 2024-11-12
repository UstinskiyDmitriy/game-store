import s from "./GameCard.module.css";
import LikeButton from "../../ui/like-button/LikeButton";
import { Link } from "react-router-dom";
import CartButton from "../../ui/cart-button/CartButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/store/store";
import { addToCart } from "../../services/slices/cartSlice";

interface TCard {
  id: number;
  image?: string;
  title?: string;
  isonline?: string;
  site?: string;
}

interface TGameCard {
  id: number;
  image: string | undefined;
  title: string;
  price: number | undefined;
  isonline?: string;
  card: TCard;
  onClick: () => void;
}

export default function GameCard({
  id,
  image,
  title,
  price,
  onClick,
  card,
}: TGameCard) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) =>
    state.cart.cart.some((item) => item.id === id)
  );

  const handleAddToCart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInCart) {
      dispatch(
        addToCart({
          id,
          image,
          title,
          price,
        })
      );
    }
  };

  return (
    <div className={s.main} onClick={onClick}>
      <Link
        to={`about/${card.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={s.image_wrapper}>
          <img src={image} alt={title} className={s.image} loading="lazy"/>
        </div>
      </Link>
      <div className={s.title}>
        <p>{title}</p>
        <p>Цена: {price} рублей </p>
      </div>
      <div className={s.overlay}>
        <LikeButton id={id} size={32} />
        <div
          className={isInCart ? s.cart_disabled : s.cart}
          onClick={handleAddToCart}
        >
          <CartButton />
        </div>
      </div>
    </div>
  );
}
