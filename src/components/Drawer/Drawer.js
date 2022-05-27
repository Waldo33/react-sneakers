import CartItem from "../CartItem/CartItem";
import GreenButton from "../GreenButton/GreenButton";
import './Drawer.scss'

const Drawer = () => {
    return ( 
        <div className="overlay">
        <div className="drawer">
        <h2 className='d-flex justify-between mb-30'>
            Корзина
            <img className="removeBtn cu-p" src="/img/cross.svg" alt="" />
            </h2>
        <div className="items flex">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <div className="cartTotalBlock">
            <ul>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
            </li>
            <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
            </li>
            </ul>
            <GreenButton/>
        </div>
        </div>
        </div>
     );
}
 
export default Drawer;