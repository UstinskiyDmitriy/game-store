import s from "./FavoriteCard.module.css";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../services/store/store";
import { addToCart } from "../../services/slices/cartSlice";
import { Tooltip } from "antd";
interface FavoriteCard {
  id: number;
  image: string | undefined;
  title: string;
  year: string | undefined | number;
  site?: string;
  rate?: number;
  steam?: string;
  price?: number;
  removeCard: (id: number) => void;
  deletingId: number | null;
}

export default function FavoriteCard({
  id,
  image,
  title,
  year,
  site,
  rate,
  price,
  removeCard,
  deletingId,
}: FavoriteCard) {

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
    <div>
      <div
        className={`${s.card_wrapper} ${deletingId === id ? s.deleting : ""}`}
      >
        <div className={s.image_wrapper}>
          <Link to={`/about/${id}`}>
            <img src={image} alt={title} loading="lazy" />
          </Link>
        </div>

        <div className={s.info}>
          <h1>{title}</h1>
          <dl className={s.game_info_table}>
            <dt>Дата выхода</dt>
            <dd>{year}</dd>
            <dt>Сайт игры</dt>
            <dd>
              <a href={site} target="_blank">
                Официальный сайт
              </a>
            </dd>
            <dt>Рейтинг</dt>
            <dd>{rate} из 10</dd>

            <dt>Цена</dt>
            <dd>{price} рублей</dd>
          </dl>
        </div>

        <div className={s.buttons_wrapper}>
          <Tooltip
            title={isInCart ? "Товар уже в корзине" : "Добавить в корзину"}
            placement="top"
          >
            <div
              onClick={isInCart ? undefined : handleAddToCart}
            >
              <ShoppingCart
                size={34}
                className={
                  isInCart ? s.cart_button_disabled : s.cart_button
                }
              />
            </div>
          </Tooltip>

          <div onClick={() => removeCard(id)}>
            <Trash2 className={s.remove_button} size={34} />
          </div>
        </div>
      </div>
    </div>
  );
}
