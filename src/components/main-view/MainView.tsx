import { useState, useEffect } from 'react';
import s from "./MainView.module.css";
import BackgroundImage from "../../ui/background-image/BackgroundImage";
import GameInfo from "../../ui/game-info/GameInfo";
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store/store';

export default function MainView() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [cards.length]);

  const currentCard = cards[currentIndex];

  return (
    <div className={s.main}>
      
      <BackgroundImage image={currentCard.image} alt={currentCard.title} />
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
