import styles from './GreenButton.module.scss'

const GreenButton = () => {
    return ( 
        <button className={styles.greenButton}>
        Оформить заказ
        <img src="/img/arrow.svg" alt="Arrow" />
        </button>
     );
}
 
export default GreenButton;