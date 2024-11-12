import s from './GameInfo.module.css';

interface GameInfoProps {
  title?: string;
  year?: string | number | undefined;
  genre?: string[];
  isOnline?: string;
}

export default function GameInfo({ title, year, genre, isOnline }: GameInfoProps) {
  return (
    <div className={s.view_description}>
      <h2>{title}</h2>
      <ul>
        <li>{year}</li>
        {genre?.map((item) => 
         <li key={title}>{item}</li>
        )}
       
        <li>{isOnline}</li>
      </ul>
    </div>
  );
}