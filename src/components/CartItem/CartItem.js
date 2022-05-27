import './CartItem.scss'

const CartItem = () => {
    return ( 
        <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/sneakers/1.png)'}} className="cartItemImg">
            </div>
            <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/cross.svg" alt="" />
        </div>
     );
}
 
export default CartItem;