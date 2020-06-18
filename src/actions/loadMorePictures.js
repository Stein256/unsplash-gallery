import { loadPictures as loadPicturesAPI } from '../network/unsplashAPI'
import setLoadingStatus from './setLoadingStatus'
import setPagesLoaded from './setPagesLoaded'
import addPictures from './addPictures'

const loadedPicIDs = new Set()

export default function loadMorePictures() {
    return async (dispatch, getState) => {
        const { isLoading, pagesLoaded } = getState()
        if(isLoading) {
            return
        }

        dispatch(setLoadingStatus(true))
        try {
            const pictures = await loadPicturesAPI(pagesLoaded + 1)
            const uniquePics = pictures.filter(pic => {
                if (!loadedPicIDs.has(pic.id)) {
                    loadedPicIDs.add(pic.id)
                    return true
                }
            })

            dispatch(addPictures(uniquePics))
            dispatch(setPagesLoaded(pagesLoaded + 1))
        } finally {
            dispatch(setLoadingStatus(false))
        }
    }
}
