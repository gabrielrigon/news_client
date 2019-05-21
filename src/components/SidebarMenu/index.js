import React from 'react'
import styled from 'styled-components'

import List from './List'

const Wrapper = styled.div`
  background-color: #fafafa;
  float: left;
  height: 100%;
  padding-left: 25%;
  position: relative;
  width: 75%;
`

const Logo = styled.h1``

const Divider = styled.hr`
  border-style: solid;
  border-width: .5px;
  margin-left: 0;
  text-align: left;
  width: 85%;
`

const SidebarMenu = props => {
  const { items } = props

  return (
    <Wrapper>
      <Logo>News App</Logo>
      <Divider />
      <List items={items} />
    </Wrapper>
  )
}

export default SidebarMenu