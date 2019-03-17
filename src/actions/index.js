import youtube from '../apis/youtube'
export const FETCH_VIDEO = 'FETCH_VIDEO'
export const SELECT_VIDEO = 'SELECT_VIDEO'

export const fetchVideo = term => async dispatch => {
    const response = await youtube.get('/search', {params:{ q: term }})
    const selected = response.data.items[0].id.videoId

    dispatch({type: FETCH_VIDEO, payload: response.data.items})
    dispatch({type: SELECT_VIDEO, payload: selected})
}

export const selectVideo = video => {
    return {
        type: SELECT_VIDEO,
        payload: video
    }
}