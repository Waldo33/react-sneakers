import Card from "../components/Card";

const Favorites = ({favorites, onFavorite, onAddToCart}) => {
    return (
        <div>
            <h1 className="mb-40">Избранное</h1>
            <div className="card-wrapper d-flex flex-wrap">
                {
                    favorites.map((product) => (
                        <Card 
                            key={product.id}
                            img={product.imageUrl} 
                            title={product.title} 
                            price={product.price}
                            {...product}
                            favorited={true}
                            onFavorite={() => onFavorite(product)}
                            onPlus={() => onAddToCart(product)}
                        /> 
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites;