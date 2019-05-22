import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  cursor: default;
  margin-bottom: 0.3rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #fafafa;
  }
`

const Link = styled.a`
  color: #555;
  text-decoration: none;
`

const Details = styled.p`
  color: #888;
  margin-top: 0.4rem;
  margin: 0;
`

const Article = props => {
  console.log(props)

  const { title, url, date, source } = props.item || {}

  return (
    <Wrapper>
      <Link href={url} target="_blank">
        {title || 'No title'}
      </Link>
      <Details>{`${source || 'Unknow source'} - ${date || 'Another day'}`}</Details>
    </Wrapper>
  )
}

export default Article
