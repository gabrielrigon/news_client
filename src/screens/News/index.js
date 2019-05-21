import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { newsActions } from '../../actions'

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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => {
      dispatch(newsActions.fetch())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)