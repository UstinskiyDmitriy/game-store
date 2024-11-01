import s from './ButtonGroup.module.css'
import { Link } from 'react-router-dom';

interface ButtonGroupProps {
  cardId?: number;
  onClick: () => void
}
export default function ButtonGroup({cardId, onClick}:ButtonGroupProps) {
  return (
    <div className={s.button_wrapper}>
      <button className={s.about_button}>
        <Link to={`about/${cardId}`} style={{ color: '#fff', textDecoration: 'none' }} onClick={onClick}>
          О игре
        </Link>
      </button>
    </div>
  );
}