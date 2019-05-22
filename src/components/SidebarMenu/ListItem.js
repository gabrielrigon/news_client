import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  list-style: none;
  margin-top: .7rem;
`

const Button = styled.button`
  background-color: #efefef;
  border: none;
  cursor: pointer;
  font-size: .8rem;
  outline: none;
  padding: .3rem .5rem;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #e1e1e1;
  }

  &.active {
    background-color: #fff;
  }
`

const handledClass = active => {
  return active && 'active'
}

const ListItem = props => {
  const { name, source, active, onSourceChange } = props

  return (
    <Item>
      <Button
        className={handledClass(active)}
        onClick={() => onSourceChange(source)}
      >
        {name || ''}
      </Button>
    </Item>
  )
}

export default ListItem
