import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const Wrapper = styled.ul`
  margin-top: 1.5rem;
  padding-left: 0;
`

const List = props => {
  const { items } = props

  return (
    <Wrapper>
      {items.map(item => {
        const { name, key } = item

        return <ListItem name={name} key={key} />
      })}
    </Wrapper>
  )
}

export default List
