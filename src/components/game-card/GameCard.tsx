import s from './GameCard.module.css'
import LikeButton from '../../ui/like-button/LikeButton';
import ButtonGroup from '../../ui/button-group/ButtonGroup';

interface TCard {
  id: number;
  image?: string;
  title?: string;
  year?: string;
  ganre?: string[];
  isonline?:string;
  site?:string
}

interface TGameCard {
  id: number;
  image: string;
  title: string;
  year: string;
  ganre: string[];
  isonline?:string;
  card: TCard;
  onClick: () => void
}
export default function GameCard({id, image, title, year, ganre, onClick, card}:TGameCard) {
  
  return (
    <div className={s.main} >
      <div onClick={onClick}>
        <img src={image} alt={title} className={s.image}/>
      </div>
      <div className={s.description_wrapper}>
      <div className={s.description}>
        <h2>{title}</h2>
        <div className={s.about}>
        <p>{year}</p>
        {ganre.map((item) =>
        <p className={s.ganre}>{item}</p> 
        )}
        </div>
        <ButtonGroup cardId={card.id} onClick={onClick}/>
       
      </div>
      <div style={{alignSelf:'end'}}>
      <LikeButton id={id}/>
      </div>
      
      </div>
      
    </div>
  )
}