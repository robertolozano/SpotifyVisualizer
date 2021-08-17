import React from 'react'
import useHover from '../hooks/useHover'


const selectTrack = (trackName) => {
    console.log("selected the song", trackName)
}


export default function TrackCard( { img, trackName } ){
    const [ hovering, attrs ] = useHover()

    return(
        <React.Fragment>
            <div {...attrs} style={{display: 'flex', border:'2px solid black', backgroundColor: `${hovering === true ?  '#abb7c9' : 'white'}`}} onClick={()=>selectTrack(trackName)}>
                <img src={img}></img>
                <p>{trackName}</p>
            </div>
        </React.Fragment>
    )
}