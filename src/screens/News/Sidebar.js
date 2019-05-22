import React from 'react'
import styled from 'styled-components'

import { SidebarMenu } from '../../components'

const Wrapper = styled.div`
  float: left;
  height: 100%;
  min-width: 200px;
  position: fixed;
  width: 25%;
`

const Sidebar = props => {
  const { sources, currentSource, onSourceChange } = props

  return (
    <Wrapper>
      <SidebarMenu items={sources} currentSource={currentSource} onSourceChange={onSourceChange} />
    </Wrapper>
  )
}

export default Sidebar