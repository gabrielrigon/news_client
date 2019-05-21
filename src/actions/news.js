export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'

export const fetch = params => {
  return dispatch => {
    dispatch({ type: FETCH_NEWS_REQUEST })
    
    /* TODO: make api request */ 
    const news = []
    dispatch({ type: FETCH_NEWS_SUCCESS, news })
  }
}