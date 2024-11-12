import { useSelector } from "react-redux";
import s from "./CartPage.module.css";
import { RootState } from "../../services/store/store";
import BasketCard from "../../components/basket-card/BasketCard";
import BasketForm from "../../components/basket-form/BasketForm";
export default function CartPage() {
  const card = useSelector((state: RootState) => state.cart);
  
  return (
    <div className={s.main}>
      {card.cart.length === 0 ? (
        <h2>Корзина пуста</h2>
      ) : ( <h2>Корзина</h2>)}
        <>
          <div className={s.main_content_wrapper}>
            <div className={s.cards_wrapper}>
              {card.cart.map((item) => (
                <BasketCard
                  image={item.image}
                  title={item.title}
                  price={item?.price}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </div>

            <div className={s.cart_form_wrapper}>
              <BasketForm/>
            </div>
          </div>
        </>
    
    </div>
  );
}
