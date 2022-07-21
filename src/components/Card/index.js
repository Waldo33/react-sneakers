import { useState } from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
    const {id, img, title, price, onFavorite, onPlus, favorited = false} = props;

    const [isFavorite, setIsFavorite] = useState(favorited);
    const onClickFavorite = () => {
      onFavorite({id, img, title, price});
      setIsFavorite(!isFavorite)
    }
    const [isAdd, setIsAdd] = useState(false);
    const onClickPlus = () => {
      onPlus({img, title, price});
      setIsAdd(!isAdd)
    }

    return ( 
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img width={30} height={30} className={styles.bookmark} src={isFavorite ? "/img/like.svg" : "/img/unlike.svg"} alt="Like" />
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