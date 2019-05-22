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

const Content = props => {
  const { news } = props

  return (
    <Wrapper>
      <PageTitle>Content</PageTitle>
      <ArticlesList items={news} />
    </Wrapper>
  )
}

export default Content