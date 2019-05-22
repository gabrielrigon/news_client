import React from 'react'
import styled from 'styled-components'

import Article from './Article'

const List = styled.section`
  margin-top: 1rem;
`

const ArticlesList = props => {
  const { items } = props

  return (
    <List>
      {(items || []).map((item, key) => (
        <Article key={key} item={item} />
      ))}
    </List>
  )
}

export default ArticlesList
