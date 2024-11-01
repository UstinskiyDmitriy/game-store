import { Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setLike } from '../../services/slices/gameSlice';
import { GameCard } from '../../services/slices/gameSlice';
import { RootState } from '../../services/store/store';
import s from './LikeButton.module.css'
interface TLikeButton {
  id: number;
}

export default function LikeButton({ id }: TLikeButton) {
  const dispatch = useDispatch();
  
  const isLiked = useSelector((state: RootState) => state.games.cards.find((card: GameCard) => card.id === id)?.liked);

  const handleLike = () => {
    dispatch(setLike(id));
  };

  return (
    <div>
      <Heart  onClick={handleLike} className={isLiked ? `${s.active}` : `${s.disabled}`}/>
    </div>
  );
}