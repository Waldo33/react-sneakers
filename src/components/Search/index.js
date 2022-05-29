import { useState } from 'react'
import './Search.scss'

const Search = ({searchValue, setSearchValue}) => {

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
        // console.log(event.target.value);
    }

    return ( 
        <div className="search-block d-flex align-center mr-20">
            <img src="/img/search.svg" alt="Search" />
            <input 
                onChange={onChangeSearchInput} 
                value={searchValue}
                placeholder="Поиск..."
            />
        </div>
     );
}
 
export default Search;