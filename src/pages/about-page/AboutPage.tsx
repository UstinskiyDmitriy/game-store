import { useSelector } from 'react-redux';
import s from './AboutPage.module.css'
import { RootState } from '../../services/store/store';
import AboutCard from '../../components/about-card/AboutCard';

export default function AboutGame() {
  
const selectedCard = useSelector(
  (state: RootState) => state.games.selectedCard
);
const platforms = selectedCard.platforms?.join(', ')
  return (
    <div className={s.main}>
      <img src={selectedCard.about_header_img} alt="" className={s.header_img}/>
      <div className={s.about_card}><AboutCard /></div>
      <main className={s.main_content}>
        <div className={s.game_desc}>
        <h1>{selectedCard.title}</h1>
        <div className={s.ganre_wrapper}>
          {selectedCard.ganre.map((item)=> <p>{item}</p>)}
        </div>
        <dl className={s.game_info_table}>
        <dt>Дата выхода</dt>
        <dd>{selectedCard.year}</dd>
        <dt>Сайт игры</dt>
        <dd><a href={selectedCard.site} target='_blank'>Официальный сайт</a></dd>
        <dt>Разработчик</dt>
        <dd>{selectedCard.developer}</dd>
        <dt>Платформы</dt>
        <dd>{platforms}</dd>
        </dl>
        </div>
        <div className={s.about}>
          <h2>Об игре</h2>
          <p>{selectedCard.description}</p>
        </div>
      </main>
    </div>
  )
}
