import React from 'react'
import TrackCard from './TrackCard'

export default function TrackGrid({ tracks, setCurrentTrack, setTracks }){
    return(
        <React.Fragment>
            <ul>
                {tracks.map((track) => {
                    return(
                        <li key={track.id}>
                            <TrackCard setCurrentTrack={setCurrentTrack} setTracks={setTracks} img={track.album.images[1].url} track={track}/>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}