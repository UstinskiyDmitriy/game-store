import s from './GameCard.module.css'
import LikeButton from '../../ui/like-button/LikeButton';
import { Link } from 'react-router-dom';
import CartButton from '../../ui/cart-button/CartButton';

interface TCard {
  id: number;
  image?: string;
  title?: string;
  isonline?: string;
  site?: string;
  
}

interface TGameCard {
  id: number;
  image: string;
  title: string;
  price: number | string | undefined;
  isonline?: string;
  card: TCard;
  onClick: () => void
}

export default function GameCard({id, image, title, price, onClick, card}: TGameCard) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={s.main} onClick={onClick}>
      <Link to={`about/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={s.image_wrapper} >
          <img src={image} alt={title} className={s.image}/>
        </div>
        </Link>
        <div className={s.title}>
          <p >{title}</p>
          {price === 'Бесплатно' ? <p>Цена: {price}</p> : <p>Цена: {price} рублей </p>}
          
          </div>
          <div className={s.overlay} onClick={handleOverlayClick}>
          
            <div className={s.like}>
            <LikeButton id={id}/>
            </div>
            <div className={s.cart}>
            <CartButton />
            </div>
          </div>
    </div>
  )
}