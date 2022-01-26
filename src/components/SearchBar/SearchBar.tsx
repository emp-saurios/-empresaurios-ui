import React, { ChangeEvent, FC } from 'react'

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
    </form>
  )
}

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default SearchBar
