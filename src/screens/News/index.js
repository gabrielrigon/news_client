import { connect } from 'react-redux'
import React, { Component } from 'react'
import styled from 'styled-components'

import { newsActions } from '../../actions'

import Content from './Content'
import Sidebar from './Sidebar'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

class News extends Component {
  componentDidMount = () => {
    const { fetchNews } = this.props
    fetchNews()
  }

  render() {
    const { news, sources } = this.props

    return (
      <Wrapper>
        <Sidebar sources={sources} />
        <Content news={news} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  const { news, sources } = state.news

  return {
    news,
    sources
  }
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
