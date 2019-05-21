import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: left;
  height: 100%;
  margin-left: 25%;
  position: relative;
  width: 75%;
  padding: 0 1.5rem;
`

const Content = props => {
  const { news } = props

  return (
    <Wrapper>
      <h1>Content</h1>
      {`news count: ${news.length}`}
    </Wrapper>
  )
}

export default Content