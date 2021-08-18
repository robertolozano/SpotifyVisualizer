import React from 'react'
import '../App.css'
import axios from 'axios'
import Search from './Search'

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = 'ee66c8136e154c84a43dbdb8961f7d63'
const REDIRECT_URL = "http://localhost:3000"
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "streaming", "user-read-email", "user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "playlist-read-private", "playlist-read-collaborative"]
const SCOPES_URL_PARAM = SCOPES.join("%20")
const AUTH_URL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&show_dialog=true`

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
            localStorage.clear();
            localStorage.setItem("accessToken", access_token)
            localStorage.setItem("expires", expires)
            localStorage.setItem("tokenType", token_type)
            setLoggedIn(true)

            setToken(access_token)
        }
    })

    return(
        <div className="row justify-content-center">
            <div>
                <a href={AUTH_URL} className="login-button center">
                    Login
                </a>
            </div>
        </div>
    )
    
}