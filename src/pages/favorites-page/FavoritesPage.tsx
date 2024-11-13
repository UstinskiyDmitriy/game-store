import { useDispatch, useSelector } from "react-redux";
import s from "./FavoritesPage.module.css";
import { RootState } from "../../services/store/store";
import { deleteCard } from "../../services/slices/gameSlice";
import { useState } from "react";
import FavoriteCard from "../../components/favorite-card/FavoriteCard";

export default function FavoritesPage() {
  const favorites = useSelector(
    (state: RootState) => state.cards.favoriteCards
  );
  const dispatch = useDispatch();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const removeCard = (cardId: number) => {
    setDeletingId(cardId);
   
    setTimeout(() => {
      dispatch(deleteCard(cardId));
      setDeletingId(null);
    }, 500);
  };
  return (
    <div className={s.main_wrapper}>
      <div className={s.header_img}></div>
      <main className={s.main_content}>
        {favorites.length === 0 && (
          <p className={s.empty_message}>Список желаемого пуст</p>
        )}
        {favorites.map((item) => (
          <div className={s.card_wrapper}>
            <FavoriteCard 
            id={item.id}
            image={item.image}
            title={item.title}
            year={item.year}
            site={item.site}
            rate={item.rate}
            price={item.price}
            removeCard={removeCard}
            deletingId={deletingId}
          />
          </div>
        ))}
      </main>
    </div>
  );
}
