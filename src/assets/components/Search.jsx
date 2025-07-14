import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <input type="text" 
            placeholder='Enter something' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <h1 className='tect-black text-3xl'>{searchTerm}</h1>
    </div>
  )
}

export default Search