import Home from './pages/Home'
import Favorites from './pages/Favorites';
import User from './pages/User';
import Header from './components/Header'
import Drawer from './components/Drawer'
import LoadCard from './components/LoadCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  const onAddToCart = (item) => {
        axios.post('https://62935a557aa3e6af1a0a08e2.mockapi.io/cart', item)
        setCartItems(prev => [...prev, item])
      }
  const onFavorite = async (item) => {
    try {
      if(favorites.find(obj => obj.id === item.id)) {
        axios.delete(`https://62935a557aa3e6af1a0a08e2.mockapi.io/favorite/${item.id}`)
        // setFavorites(prev => prev.filter(obj => obj.id !== item.id))
      } else {
        const { data } = await axios.post('https://62935a557aa3e6af1a0a08e2.mockapi.io/favorite', item)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  useEffect(() => {
      axios.get('https://62935a557aa3e6af1a0a08e2.mockapi.io/products')
      .then(res => {
        setProducts(res.data);
      })
      axios.get('https://62935a557aa3e6af1a0a08e2.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data);
      })
      axios.get('https://62935a557aa3e6af1a0a08e2.mockapi.io/favorite')
      .then(res => {
        setFavorites(res.data);
      })
  }, [])

  

  const onRemoveItem = (id) => {
    axios.delete(`https://62935a557aa3e6af1a0a08e2.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  

  return (
    <div className='wrapper clear'>
      { cartOpened ? <Drawer onRemove={onRemoveItem} products={cartItems} onClose={() => setCartOpened(false)}/> : null }
      <Header onClickCart={() => setCartOpened(true)} />
      <main className="content p-40">
      
      <Routes>
      <Route path="/" element={
        <Home 
          products={products}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onFavorite={onFavorite}
          onAddToCart={onAddToCart}
        />
      } />
      <Route path="favorites" element={
        <Favorites
          favorites={favorites}
          onFavorite={onFavorite}
        />
      }/>
      <Route path="user" element={<User/>}/>
      <Route path="*" element={<h1>Страница не найдена</h1>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;