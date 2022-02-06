import React, { ChangeEvent, FC } from 'react'
import Icon from '../Icon'

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar productos',
  ...rest
}) => {
  return (
    <form>
      <input type="text" value={value} placeholder={placeholder} onChange={onChange} {...rest} />
      <Icon iconType="solid" icon="SearchIcon" />
    </form>
  )
}

export interface SearchBarProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

export default SearchBar
