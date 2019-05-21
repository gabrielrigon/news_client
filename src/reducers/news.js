import { newsActions } from '../actions'

const {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} = newsActions

const initialState = () => ({
  news: [],
  loadingNews: false,
  fetchNewsError: false
})

const news = (state = initialState(), action = {}) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return state
    case FETCH_NEWS_SUCCESS:
      return state
    case FETCH_NEWS_FAILURE:
      return state
    default:
      return state
  }
}

export default news