import { mock } from '../utils'
import { newsActions } from '../actions'

const { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, CHANGE_SOURCE } = newsActions

const initialState = () => ({
  sourceName: 'All',
  source: 'all',
  sources: mock.sources,
  news: [],
  loadingNews: false,
  fetchNewsError: false
})

const news = (state = initialState(), action = {}) => {
  switch (action.type) {
    case CHANGE_SOURCE:
      const { sources } = mock
      const { source } = action

      const sourceName = (sources.find(item => item.source === source) || {}).name || ''

      return {
        ...state,
        source,
        sourceName
      }

    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loadingNews: true
      }

    case FETCH_NEWS_SUCCESS:
      const { news } = action

      return {
        ...state,
        news,
        loadingNews: false
      }

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loadingNews: true
      }

    default:
      return state
  }
}

export default news
