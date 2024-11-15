import s from "./AboutCard.module.css";
import { Layers3, NotebookPen } from "lucide-react";
import { Rate } from "antd";
import LikeButton from "../../ui/like-button/LikeButton";
import { GameCard } from "../../services/slices/gameSlice";

interface AboutCardProps {
  selectedCard: GameCard
}
export default function AboutCard({selectedCard}:AboutCardProps) {
 

  return (
    <div className={s.main}>
      <img src={selectedCard.image} alt="" className={s.selected_image} loading="lazy"/>
      <div className={s.button_group}>
        <button><NotebookPen />Написать отзыв</button>
        <button><Layers3/> Добавить в подборку</button>
        <div className={s.button_group_rate}>
          <Rate allowHalf defaultValue={4.7}  className={s.rate}/>
         <LikeButton id={selectedCard.id}/>
        </div>
      </div>
     
    </div>
  );
}