import { SET_PAGES_LOADED } from './types'

export default function setPagesLoaded(pagesLoaded) {
    return {
        type: SET_PAGES_LOADED,
        pagesLoaded,
    }
}
