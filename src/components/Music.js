import React from 'react'
import Login from './Login'
import Search from './Search'
import TrackGrid from './TrackGrid'

export default function Music (){
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [tracks, setTracks] = React.useState(null)

    return(
        <React.Fragment>
            {loggedIn === true ?  <Search setTracks={setTracks}/> : <Login setLoggedIn={setLoggedIn}/>}
            {tracks && <TrackGrid tracks={tracks}/>}
        </React.Fragment>
    )
}