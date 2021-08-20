import React from 'react'
import useHover from '../hooks/useHover'

export default function TrackCard( { img, track, setCurrentTrack, setTracks, index } ){
    const [ hovering, attrs ] = useHover()

    const selectTrack = (trackName) => {
        console.log(`Selected the song: ${track.name}`)
        setCurrentTrack(track)
        setTracks(null)
    }

    return(
        <React.Fragment>
            <div className="trackcard" style={{backgroundColor: `${hovering === true ?  'grey' : '#2c2c2c'}`, animationDelay:`${index * 0.1}s`}} 
                onClick={()=>selectTrack(track)}
                {...attrs} 
            >
                <img src={img} style={{height: 'auto', width: '100%'}}></img>
                <p style={{padding: '10px 0px', height: '25px', textAlign: 'center', overflow: 'hidden'}}>{track.name}</p>
            </div>
        </React.Fragment>
    )
}