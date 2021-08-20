import React from 'react'
import '../App.css'
import axios from 'axios'
import Search from './Search'

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = 'ee66c8136e154c84a43dbdb8961f7d63'
let REDIRECT_URL = "https://wavify.netlify.app/"
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "streaming", "user-read-email", "user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "playlist-read-private", "playlist-read-collaborative"]
const SCOPES_URL_PARAM = SCOPES.join("%20")
const AUTH_URL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&show_dialog=true`

if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
    console.log("It's a local server!", window.location.hostname);
    REDIRECT_URL = "http://localhost:3000"
}

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const StringAfterHashtag = hash.substring(1);
    const paramsInUrl = StringAfterHashtag.split("&")
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        console.log(currentValue)
        const [ key, value ] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator
    }, {});
    return paramsSplitUp;
}

export default function Login({ setLoggedIn, setToken }){
    React.useEffect(() => {
        if(window.location.hash){
            const { access_token, expires, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash)

            axios.get(`https://api.spotify.com/v1/search?q=habit&type=track`,{
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + access_token,
                },
            }).then((res) => {
                console.log("logged in")
                console.log(res)
                setToken(access_token)
                setLoggedIn(true)
            }).catch((error) => {
                console.log("error logging in", error)
            })
        }
    },[])

    return(
        <div className="row justify-content-center">
            <a href={AUTH_URL}>
                <button className="login-button center">
                    Login
                </button>
            </a>
        </div>
    )
    
}