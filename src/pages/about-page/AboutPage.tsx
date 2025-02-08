import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./AboutPage.module.css";
import { RootState } from "../../services/store/store";
import AboutCard from "../../components/about-card/AboutCard";
import { useEffect} from "react";
import { setSelectedCard } from "../../services/slices/gameSlice";



export default function AboutGame() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cards = useSelector((state: RootState) => state.cards.cards);
  const selectedCard = useSelector(
    (state: RootState) => state.cards.selectedCard
  );

  useEffect(() => {
    const card = cards.find((card) => card.id === Number(id));
    if (card) {
      dispatch(setSelectedCard(card));
    }
  }, [id, cards, dispatch]);

  const platforms = selectedCard.platforms?.join(", ");

  return (
    <div className={s.main}>
      <img
        src={selectedCard.about_header_img}
        alt=""
        className={s.header_img}
        loading="lazy"
      />
      <div className={s.main_content_wrapper}>
      <div className={s.about_card}>
        <AboutCard selectedCard={selectedCard} />
      </div>
      <main className={s.main_content}>
        <div className={s.game_desc}>
          <h1>{selectedCard.title}</h1>
          <div className={s.ganre_wrapper}>
            {selectedCard.ganre?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <dl className={s.game_info_table}>
            <dt>Дата выхода</dt>
            <dd>{selectedCard.year}</dd>
            <dt>Сайт игры</dt>
            <dd>
              <a
                href={selectedCard.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Официальный сайт
              </a>
            </dd>
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
      
    </div>
  );
}
