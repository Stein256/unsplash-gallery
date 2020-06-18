import { combineReducers } from 'redux'
import pictures from './pictures'
import loadingStatus from './loadingStatus'
import pagesLoaded from './pagesLoaded'

const rootReducer = combineReducers({
    pictures,
    isLoading: loadingStatus,
    pagesLoaded,
})

export default rootReducer
