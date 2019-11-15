import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types';

export const SearchRooms = ({action}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        const search = event.target.value; 
        setSearchValue(search); 
        action(search);
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <FaSearch />
            <input 
                type="search"
                className="search-field"
                onChange={(event) => handleChange(event)}
                value={searchValue}
                placeholder="Search..."
            />
        </form>
    )
}

SearchRooms.propTypes = {
 action: PropTypes.func.isRequired
}