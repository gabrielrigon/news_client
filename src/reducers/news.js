import { newsActions } from '../actions'
import { mock } from '../utils'

const { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } = newsActions

const initialState = () => ({
  sources: mock.sources,
  news: [],
  loadingNews: false,
  fetchNewsError: false
})

const news = (state = initialState(), action = {}) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return state

    case FETCH_NEWS_SUCCESS:
      const { news } = action

      return {
        ...state,
        news
      }

    case FETCH_NEWS_FAILURE:
      return state

    default:
      return state
  }
}

export default news
