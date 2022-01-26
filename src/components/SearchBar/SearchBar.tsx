import React, { ChangeEvent, FC } from 'react'
import Icon from '../Icon'

const SearchBar: FC<SearchBarProps> = ({ value, onChange, placeholder = 'Buscar productos' }) => {
  return (
    <form>
      <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
      <Icon iconType="solid" icon="SearchIcon" />
    </form>
  )
}

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

export default SearchBar
