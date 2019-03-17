import React from 'react'
import PlayItem from "./play-item";

const renderLst = (videos) => videos.map(item => <PlayItem  key={item.id.videoId} item={item} />)

const PlayList = ({playlist}) => {
    return (
        <div className="playlist-wrapper">
            <div className="ui celled list">
                {playlist.length !== 0 ? renderLst(playlist): null}
            </div>
        </div>

    );
}

export default PlayList