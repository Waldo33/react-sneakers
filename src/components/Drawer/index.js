import CartTotalBlock from "../CartTotalBlock";
import GreenButton from "../GreenButton";
import styles from './CartItem.module.scss'
import './Drawer.scss'

const Drawer = ({onClose, products = [], onRemove}) => {
    return ( 
        <div className="overlay">
        <div className="drawer">
        <h2 className='d-flex justify-between mb-30'>
            Корзина
            <img onClick={onClose} className="removeBtn cu-p" src="/img/cross.svg" alt="" />
            </h2>
            {
                products.length > 0 ? 
                    <div className="items flex">
                    {products.map((cartItem) => (
                    <div className={styles.cartItem  + " d-flex align-center mb-20"}>
                        <div style={{backgroundImage: `url(${cartItem.imageUrl})`}} className={styles.cartItemImg}>
                        </div>
                        <div className='mr-20 flex'>
                        <p className='mb-5'>{cartItem.title}</p>
                        <b>{cartItem.price} руб.</b>
                        </div>
                        <img onClick={() => onRemove(cartItem.id)} className={styles.removeBtn} src="/img/cross.svg" alt="" />
                    </div>
                    ))}
                </div> : 
                <div className='cartEmpty d-flex align-center justify-center flex-column flex m-auto'>
                    <img src="/img/empty-box.png" alt="Empty" />
                    <h2>Корзина пустая</h2>
                    <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={onClose} className="greenButton"><img src="/img/back-arrow.svg"/>Вернуться назад</button>
                </div>
            }
            {
                products.length > 0 && <CartTotalBlock products={products}/>
            }
        
        </div>
        </div>
     );
}
 
export default Drawer;