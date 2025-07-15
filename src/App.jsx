import React from 'react'
import { useState } from 'react';
import Search from './assets/components/Search'
import NavBar from './assets/components/NavBar'

const App = () => {

  const [searchTerm,setSearchTerm] = useState('');

  return (
    <div><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></div>
  )
}

export default App