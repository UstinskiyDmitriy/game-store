import { Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setLike } from '../../services/slices/gameSlice';
import { GameCard } from '../../services/slices/gameSlice';
import { RootState } from '../../services/store/store';
import s from './LikeButton.module.css'

interface TLikeButton {
  id: number;
  size?: number;
}

export default function LikeButton({ id, size}: TLikeButton) {
  const dispatch = useDispatch();
  
  const isLiked = useSelector((state: RootState) => 
    state.cards.cards.find((card: GameCard) => card.id === id)?.liked
  );

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(setLike(id));
  };

  return (
    <div className={s.main}>
      <div className={s.tooltip}>
        <Heart 
          onClick={handleLike} 
          className={isLiked ? `${s.active}` : `${s.disabled}`}
          size={size}
        />
       
      </div>
    </div>
  );
}