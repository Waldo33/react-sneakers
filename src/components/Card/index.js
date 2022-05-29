import { useState } from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
    const {img, title, price, onFavorite, onPlus} = props;

    const [isAdd, setIsAdd] = useState(false);
    const onClickPlus = () => {
      onPlus({img, title, price});
      setIsAdd(!isAdd)
    }

    return ( 
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
              <img width={30} height={30} className={styles.bookmark} src="/img/unlike.svg" alt="Like" />
            </div>
            <img width={133} height={112} src={img} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdd ? "/img/checked.svg" : "/img/plus.svg"} alt="" />
            </div>
          </div>
     );
}
 
export default Card;