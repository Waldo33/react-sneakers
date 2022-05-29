import GreenButton from "../GreenButton";

const CartTotalBlock = () => {
    return ( 
        <div className="cartTotalBlock">
            <ul>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>20000 руб.</b>
            </li>
            <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
            </li>
            </ul>
            <GreenButton/>
        </div>
     );
}
 
export default CartTotalBlock;