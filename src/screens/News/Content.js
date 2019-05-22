import React from 'react'
import styled from 'styled-components'

import { ArticlesList } from '../../components'

const Wrapper = styled.div`
  float: left;
  height: 100%;
  margin-left: 25%;
  position: relative;
  width: 75%;
`

const PageTitle = styled.h1`
  color: #444;
  margin-left: 2rem;
`

const Placeholder = styled.p`
  color: #888;
  margin-left: 2rem;
`

const handledTitle = title => {
  return title || 'Latest news'
}

const handledPlaceholderMessage = loading => {
  return loading ? 'Loading...' : 'There\'s nothing to show you, sorry. Try again later.'
}

const Content = props => {
  const { news, source, loading } = props

  return (
    <Wrapper>
      <PageTitle>{handledTitle(source)}</PageTitle>
      {
        (news || []).length ? (
          <ArticlesList items={news} />
        ) : (
            <Placeholder>
              {handledPlaceholderMessage(loading)}
            </Placeholder>
          )
      }

    </Wrapper>
  )
}

export default Content