import React from 'react'
import TrackCard from './TrackCard'

export default function TrackGrid({ tracks, setCurrentTrack, setTracks }){

    return(
        <React.Fragment>
            <ul className="trackgrid">
                {tracks.map((track, index) => {
                    return(
                        <li key={track.id} style={{width: '20%'}}>
                            <TrackCard setCurrentTrack={setCurrentTrack} setTracks={setTracks} img={track.album.images[1].url} track={track} index={index}/>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}