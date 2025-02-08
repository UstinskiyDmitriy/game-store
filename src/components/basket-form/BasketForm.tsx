import { HandCoins, ShieldAlert } from "lucide-react";
import s from "./BasketForm.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store/store";

export default function BasketForm() {

  const total = useSelector((state: RootState) => state.cart.total);
  const discont = total - total * 0.03;

  return (
    <form className={s.main} action="submit">
      <h3>Ваш заказ</h3>
      <div className={s.info_wrapper}>
        <div className={s.info}>
          <p>Игры</p> <p>{total} руб.</p>
        </div>
        <div className={s.info}>
          <p>Скидка</p> <p className={s.discont}>{3} %</p>
        </div>
      </div>
      <span className={s.separator}></span>
      <div className={s.form_wrapper}>
        <div className={s.alert}>
          <ShieldAlert className={s.alert_img} size={30} />
          <p>Для получения игры нужно ввести почту</p>
        </div>
        <div className={s.form}>
          <input type="email" placeholder="Введите ваш Email" />
        </div>
        <div></div>
        <div className={s.separator_wrapper}>
          <span className={s.separator}></span>
          <p>Или</p> <span className={s.separator}></span>
        </div>
        <button className={s.entry_button} type="button">
          Войти
        </button>
      </div>
      <span className={s.separator}></span>
      <div className={s.total}>
        <p>Общая стоимость</p>
        <p>{Math.floor(discont)} руб.</p>
      </div>
      <button className={s.payment} type="button">
        <HandCoins />
        Перейти к оплате
      </button>
    </form>
  );
}
