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
    fetchNews('all')
  }

  render() {
    const { news, sourceName, source, sources, loadingNews, fetchNews } = this.props

    return (
      <Wrapper>
        <Sidebar sources={sources} currentSource={source} onSourceChange={fetchNews} />
        <Content news={news} source={sourceName} loading={loadingNews} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  const { news, sourceName, source, sources, loadingNews } = state.news

  return {
    news,
    sourceName,
    source,
    sources,
    loadingNews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: source => {
      dispatch(newsActions.fetch(source))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
