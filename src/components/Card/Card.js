import './Card.scss'

const Card = (props) => {
    const {img} = props;
    return ( 
        <div className="card">
            <div className="favorite">
              <img width={30} height={30} className="bookmark" src="/img/unlike.svg" alt="Like" />
            </div>
            <img width={133} height={112} src={'/img/sneakers/'+img+'.png'} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
     );
}
 
export default Card;