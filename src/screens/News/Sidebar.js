import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: left;
  height: 100%;
  min-width: 200px;
  position: fixed;
  width: 25%;
`

const Sidebar = props => {
  const { children } = props

  return (
    <Wrapper>
      <h1>Sidebar</h1>
    </Wrapper>
  )
}

export default Sidebar