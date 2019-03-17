import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {selectVideo} from "../actions";

const PlayItem = ({item, selectVideo}) => {
    return (
        <div
            className="item play-item"
            onClick={() => selectVideo(item.id.videoId)}
        >
            <img className="ui image plylist-img"
                 alt={item.snippet.title}
                 src={item.snippet.thumbnails.medium.url} />

            <div className="content">
                <div className="header">{item.snippet.title}</div>
                {item.snippet.description}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ selectVideo }, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayItem)