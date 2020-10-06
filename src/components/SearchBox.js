import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <div className='pa2'>
               <input 
               className="pa3 ba b--green bg-lightest-blue" 
               type='search'
               placeholder='search robots'
               onChange={searchChange}
               />
             
            </div>
        </div>
    )
}

export default SearchBox
