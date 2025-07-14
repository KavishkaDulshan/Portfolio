import React from 'react'
import { useState } from 'react';
import Search from './assets/components/Search'

const App = () => {

  const [searchTerm,setSearchTerm] = useState('');

  return (
    <div><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></div>
  )
}

export default App