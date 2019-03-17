import React from 'react';

const PlayVideo = ({videoId}) => {
    return (
        <div>
            {videoId?
                <iframe width="100%"
                        height="500" src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        title={videoId}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />: null}
        </div>
    )
}

export default PlayVideo