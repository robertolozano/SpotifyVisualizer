import React from 'react'
import useHover from '../hooks/useHover'

export default function TrackCard( { img, track, setCurrentTrack, setTracks } ){
    const [ hovering, attrs ] = useHover()

    const selectTrack = (trackName) => {
        console.log(`Selected the song: ${track.name}`)
        setCurrentTrack(track)
        setTracks(null)
    }

    return(
        <React.Fragment>
            <div style={{display: 'flex', border:'2px solid black', backgroundColor: `${hovering === true ?  '#abb7c9' : 'white'}`}} 
                onClick={()=>selectTrack(track)}
                {...attrs} 
            >
                <img src={img}></img>
                <p>{track.name}</p>
            </div>
        </React.Fragment>
    )
}