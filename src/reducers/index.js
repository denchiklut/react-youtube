import {combineReducers} from "redux";
import VideosReducer from './videos-reducer'
import SelectedVideoReducer from './selected-video'

const reducers = combineReducers({
    videos: VideosReducer,
    selectedVideo: SelectedVideoReducer
})

export default reducers