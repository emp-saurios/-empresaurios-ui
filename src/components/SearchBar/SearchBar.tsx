import React from 'react'
import { useInput } from './hooks/useInput'

const SearchBar = () => {
  const searchInput = useInput('text')

  return (
    <form>
      <input {...searchInput} />
    </form>
  )
}

export default SearchBar
