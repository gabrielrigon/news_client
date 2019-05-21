import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  list-style: none;
  margin-top: .7rem;
`

const ListItem = props => {
  const { name } = props

  return <Item>{name || ''}</Item>
}

export default ListItem
