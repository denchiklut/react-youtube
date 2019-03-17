import React from 'react'

import PlayList from './play-list'
import PlayVideo from './play-video'

const Content = ({playlist, video})  => {
    return (
        <div className="ui grid">
            <div className="ten wide column">
                <PlayVideo videoId={video} />
            </div>
            <div className="six wide column">
                <PlayList playlist={playlist} />
            </div>
        </div>
    )
}

export default Content