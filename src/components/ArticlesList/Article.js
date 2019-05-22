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

const handledTitle = title => {
  return title || 'No title'
}

const handledSource = source => {
  return source || 'Unknow source'
}

const handledDate = stringDate => {
  const date = new Date(stringDate)
  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]

  return `${day}/${month}/${year}` || 'Last days'
}

const Article = props => {
  const { title, url, date, source } = props.item || {}

  return (
    <Wrapper>
      <Link href={url} target="_blank">
        {handledTitle(title)}
      </Link>
      <Details>{`${handledSource(source)} - Published at ${handledDate(date)}`}</Details>
    </Wrapper>
  )
}

export default Article
