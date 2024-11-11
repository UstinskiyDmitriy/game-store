import { ShoppingCart } from 'lucide-react'
import s from './CartButton.module.css'
export default function CartButton() {

  return (
    <div className={s.cart}>
      <ShoppingCart size={26}/>
    </div>
  )
}
