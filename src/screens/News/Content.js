import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: left;
  height: 100%;
  margin-left: 25%;
  position: relative;
  width: 75%;
`

const Content = props => {
  return (
    <Wrapper>
      <h1>Content</h1>
    </Wrapper>
  )
}

export default Content