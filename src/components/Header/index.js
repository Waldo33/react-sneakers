import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const {onClickCart} = props
    return ( 
        <header className="d-flex justify-between align-center p-40">
            <div className='headerLeft d-flex align-center'>
            <Link to="/"><img className="mr-15" width={40} heigth={40} src="/img/logo.png" alt="" /></Link>
            <div className='headerInfo'>
                <h3>React Sneakers</h3>
                <p className='opacity-5'>Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className='headerRight d-flex align-center'>
            <li onClick={onClickCart} className='d-flex align-center mr-30 cu-p'>
                <img className="mr-10" src="/img/cart.svg" alt="" />
                <span>1205 руб.</span>
            </li>
            <li className='mr-30'>
                <Link to="/favorites"><img src="/img/heart.svg" alt="" /></Link>
            </li>
            <li>
                <Link to="/user"><img src="/img/user.svg" alt="" /></Link>
            </li>
            </ul>
        </header>
     );
}
 
export default Header;