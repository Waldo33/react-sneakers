import './Search.scss'

const Search = () => {
    return ( 
        <div className="search-block d-flex align-center mr-20">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."/>
        </div>
     );
}
 
export default Search;