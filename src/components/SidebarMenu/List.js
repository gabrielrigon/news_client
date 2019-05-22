import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const Wrapper = styled.ul`
  margin-top: 1.5rem;
  padding-left: 0;
`

const handledCurrent = (source, currentSource) => {
  return source === currentSource
}

const List = props => {
  const { items, currentSource, onSourceChange } = props

  return (
    <Wrapper>
      {items.map((item, key) => {
        const { name, source } = item

        return (
          <ListItem
            key={key}
            name={name}
            source={source}
            active={handledCurrent(source, currentSource)}
            onSourceChange={onSourceChange}
          />
        )
      })}
    </Wrapper>
  )
}

export default List
