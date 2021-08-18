import React from 'react'
import Login from './Login'
import Search from './Search'
import TrackGrid from './TrackGrid'
import MusicPlayer from './MusicPlayer'

export default function Music (){
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [tracks, setTracks] = React.useState(null)
    const [currentTrack, setCurrentTrack] = React.useState(null)
    const [token, setToken] = React.useState('')


    return(
        <React.Fragment>
            {loggedIn === true ?  <Search setTracks={setTracks}/> : <Login setLoggedIn={setLoggedIn} setToken={setToken}/>}
            {tracks && <TrackGrid tracks={tracks} setCurrentTrack={setCurrentTrack} setTracks={setTracks}/>}
            {currentTrack && <MusicPlayer currentTrack={currentTrack} token={token}/>}
        </React.Fragment>
    )
}