import { useState} from 'react';
import s from "./MainView.module.css";
import BackgroundImage from "../../ui/background-image/BackgroundImage";
import GameInfo from "../../ui/game-info/GameInfo";
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';

export default function MainView() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = cards[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % cards.length);
  }

  return (
    <div className={s.main}>
      <BackgroundImage image={currentCard.image} alt={currentCard.title} id={currentCard.id} nextCard={nextCard} prevCard={prevCard}/>
      <div className={s.wrapper}>
        <div></div>
        <div className={s.view_description}>
          <GameInfo
            title={currentCard.title}
            year={currentCard.year}
            genre={currentCard.ganre}
            isOnline={currentCard.isonline}
          />
        </div>
      </div>
    </div>
  );
}
