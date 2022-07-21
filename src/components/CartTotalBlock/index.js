import GreenButton from "../GreenButton";

const CartTotalBlock = ({products}) => {
    let total = 0;
    products.forEach((product) => {
        total += +(product.price.replace(/\s/g, ''))
    })
    
    return ( 
        <div className="cartTotalBlock">
            <ul>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>{total} руб.</b>
            </li>
            <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{Math.floor((total / 100) * 5)} руб. </b>
            </li>
            </ul>
            <GreenButton/>
        </div>
     );
}
 
export default CartTotalBlock;