import s from "./AboutCard.module.css";
import { Layers3, NotebookPen, ShoppingCart } from "lucide-react";
import { Rate, Tooltip } from "antd";
import LikeButton from "../../ui/like-button/LikeButton";
import { GameCard } from "../../services/slices/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/store/store";
import { addToCart } from "../../services/slices/cartSlice";

interface AboutCardProps {
  selectedCard: GameCard
}
export default function AboutCard({selectedCard}:AboutCardProps) {

  const dispatch = useDispatch()
  const isInCart = useSelector((state: RootState) =>
    state.cart.cart.some((item) => item.id === selectedCard.id)
  );

  const {id, image, title, price} = selectedCard
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
    <div className={s.main}>
      <img src={selectedCard.image} alt="" className={s.selected_image} loading="lazy"/>
      <div className={s.button_group}>
        <button><NotebookPen />Написать отзыв</button>
        <button><Layers3/> Добавить в подборку</button>
        <div className={s.button_group_rate}>
          <Rate allowHalf defaultValue={4.7}  className={s.rate}/>
          <div className={s.lower_buttons}>
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
         <LikeButton id={selectedCard.id}/>
          </div>
          
        </div>
      </div>
     
    </div>
  );
}