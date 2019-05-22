import proxy from './proxy'

export const fetch = sources => {
  return proxy.get('/news', {
    params:{
      sources
    }
  })
}