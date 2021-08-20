import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import axios from 'axios'

export default function MusicPlayer({ currentTrack, token }){
    const getAudioData = () => {
        axios.get(`https://api.spotify.com/v1/audio-analysis/${currentTrack.id}`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }).then((res) => {
            console.log("the audio data:", res)
        }).catch((error) => {
            console.log("audio data error:", error)
        })
    }

    React.useEffect(() =>{
        getAudioData()
    }, [currentTrack])


    return(
        <React.Fragment>
            <div style={{width: "100%"}} className="musicPlayerBackground">
                <SpotifyPlayer
                    styles={{bgColor: 'transparent', color: 'white', trackNameColor: 'white', sliderColor: 'rgb(62, 211, 156)', sliderHandleColor: 'white', trackArtistColor: 'white', height: '100px'}}
                    token={token}
                    showSaveIcon
                    autoPlay={true}
                    uris={currentTrack.uri ? [currentTrack.uri] : []}
                />
            </div>
        </React.Fragment>
    )
}