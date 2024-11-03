import s from "./MainView.module.css";
import BackgroundImage from "../../ui/background-image/BackgroundImage";
import GameInfo from "../../ui/game-info/GameInfo";

interface TMainView {
  card: {
    id: number;
    image?: string;
    title?: string;
    year?: string;
    ganre?: string[];
    isonline?: string;
    site?: string;
  };
  showDescription?: boolean;
}
export default function MainView({ card, showDescription = true }: TMainView) {
  return (
    <div className={s.main}>
      <BackgroundImage image={card.image} alt={card.title} />
      <div className={s.wrapper}>
        <div></div>
        {showDescription && (
          <div className={s.view_description}>
            <GameInfo
              title={card.title}
              year={card.year}
              genre={card.ganre}
              isOnline={card.isonline}
            />
          </div>
        )}
      </div>
    </div>
  );
}
