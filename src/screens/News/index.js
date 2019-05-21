import React, { Component } from 'react'
import styled from 'styled-components'

import Content from './Content'
import Sidebar from './Sidebar'

const Wrapper = styled.div`
  width: 100%;
  height: 100%
`

class News extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    )
  }
}

export default News