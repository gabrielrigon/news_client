import { newsApi } from '../api'

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'

export const CHANGE_SOURCE = 'CHANGE_SOURCE'

export const fetch = source => {
  return dispatch => {
    dispatch({ type: CHANGE_SOURCE, source })
    dispatch({ type: FETCH_NEWS_REQUEST })

    return newsApi
      .fetch(source)
      .then(response => {
        const {
          data: { items: news }
        } = response

        dispatch({ type: FETCH_NEWS_SUCCESS, news })
      })
      .catch(fetchNewsError => {
        console.error(fetchNewsError)
        dispatch({ type: FETCH_NEWS_FAILURE, fetchNewsError })
      })
  }
}
