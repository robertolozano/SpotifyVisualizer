import React from 'react'
import TrackCard from './TrackCard'

export default function TrackGrid({ tracks }){
    return(
        <React.Fragment>
            <ul>
                {tracks.map((track, index) => {
                    return(
                        <li key={track.id}>
                            <TrackCard img={track.album.images[1].url} trackName={track.name}/>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}