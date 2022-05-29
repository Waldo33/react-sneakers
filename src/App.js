import Card from './components/Card'
import Search from './components/Search'
import Header from './components/Header'
import Drawer from './components/Drawer'
import LoadCard from './components/LoadCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
      axios.get('https://62935a557aa3e6af1a0a08e2.mockapi.io/products')
      .then(res => {
        setProducts(res.data);
      })
      axios.get('https://62935a557aa3e6af1a0a08e2.mockapi.io/cart')
      .then(res => {
        setCartItems(res.data);
      })
  }, [])

  const onAddToCart = (item) => {
    axios.post('https://62935a557aa3e6af1a0a08e2.mockapi.io/cart', item)
    setCartItems(prev => [...prev, item])
  }

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://62935a557aa3e6af1a0a08e2.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='wrapper clear'>
      { cartOpened ? <Drawer onRemove={onRemoveItem} products={cartItems} onClose={() => setCartOpened(false)}/> : null }
      <Header onClickCart={() => setCartOpened(true)} />
      <main className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"`  : 'Все кроссовки'}</h1>
          <Search 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="card-wrapper d-flex flex-wrap">
          {
            products.filter(item => 
              item.title.toLowerCase()
              .includes(searchValue.toLowerCase()))
              .map((product) => (
              <Card 
                key={product.id}
                img={product.imageUrl} 
                title={product.title} 
                price={product.price}
                onFavorite={() => console.log(`Добавили в избранное`)}
                onPlus={() => onAddToCart(product)}
              /> 
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;