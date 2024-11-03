import { useDispatch, useSelector } from 'react-redux';
import GameCard from "../../components/game-card/GameCard";
import MainView from "../../components/main-view/MainView";
import s from "./HomePage.module.css";
import { RootState } from '../../services/store/store';
import { setSelectedCard } from '../../services/slices/gameSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.games.cards);
  const selectedCard = useSelector((state: RootState) => state.games.selectedCard);
  
  const pickCard = (card: typeof cards[0]) => {
    dispatch(setSelectedCard(card));
  };

  return (
    <div className={s.main}>
      <main className={s.main_content_wrapper}>
        <div className={s.main_view}>
          <MainView card={selectedCard} />
        </div>
        <div className={s.cards_wrapper}>
          {cards.map((item) => (
            <GameCard
              card={selectedCard}
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              isonline={item.isonline}
              onClick={() => pickCard(item)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}