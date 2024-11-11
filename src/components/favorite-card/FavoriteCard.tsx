import s from './FavoriteCard.module.css'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FavoriteCard {
  id: number;
  image: string | undefined;
  title: string;
  year: string | undefined | number;
  site?: string;
  rate?: number;
  steam?: string;
  price?: string | number;
  removeCard: (id:number) => void
  deletingId: number | null
}

export default function FavoriteCard({id,image, title,year,site,rate,steam,price, removeCard, deletingId}:FavoriteCard) {
  return (
    <div>
      <div className={`${s.card_wrapper} ${deletingId === id ? s.deleting : ''}`}>
            <div className={s.image_wrapper}>
              <img src={image} alt={title} />
            </div>

            <div className={s.info}>
              <h1>{title}</h1>
              <dl className={s.game_info_table}>
                <dt>Дата выхода</dt>
                <dd>{year}</dd>
                <dt>Сайт игры</dt>
                <dd>
                  <a href={site} target="_blank">
                    Официальный сайт
                  </a>
                </dd>
                <dt>Рейтинг</dt>
                <dd>{rate} из 10</dd>

                <dt>Купить в стим</dt>
                <dd>
                  <Link to={`${steam}`} target="_blank">
                    <img className={s.steam_img} src="/steam.png" alt="" />
                  </Link>
                </dd>
                <dt>Цена</dt>

                <dd>
                  {price === "Бесплатно"
                    ? price
                    : `${price} рублей`}
                </dd>
              </dl>
            </div>
            <div onClick={() => removeCard(id)}>
              <Trash2 className={s.remove_button} />
            </div>
          </div>
    </div>
  )
}
