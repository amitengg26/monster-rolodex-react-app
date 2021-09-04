import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder,handleClick}) => {
    return (
        <input className="search" type="search" placeholder={placeholder}
        onChange={ handleClick } />
    )
}

export default SearchBox
