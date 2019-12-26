import React from 'react';

const SearchBox = ( {searchField, searchChange} ) => {  
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder="type roboname here"
                onChange={searchChange}
            />
         </div>
    )
}

export default SearchBox;