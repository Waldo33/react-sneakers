import Card from '../components/Card'
import Search from '../components/Search'

const Home = ({products, searchValue, setSearchValue, onFavorite, onAddToCart}) => {
    return (
        <div>
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
                onFavorite={() => onFavorite(product)}
                onPlus={() => onAddToCart(product)}
              /> 
            ))
          }
        </div>
        </div>
    );
}

export default Home;