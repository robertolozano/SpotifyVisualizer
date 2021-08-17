import React from 'react'
import axios from 'axios'

const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'
const PLAYLIST_ENDPOINT2 = "https://api.spotify.com/v1/users/me/playlists"

const WOOZY_URL = "https://api.spotify.com/v1/search?q=habit&type=track"

export default function Search({ setTracks }){
    const [token, setToken] = React.useState('')
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    React.useEffect(() => {
        if(localStorage.getItem("accessToken")){
            setToken(localStorage.getItem("accessToken"))
        }
    },[])

    const handleSearch = () => {
        axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }).then((res) => {
            console.log(res)
            console.log(res.data.tracks)
            console.log(res.data.tracks.items)
            setTracks(res.data.tracks.items)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <React.Fragment>
            {/* <input></input>
            <input></input>
            <button onClick={handleSearch}>Search</button> */}


            <form onSubmit={handleSearch}>
                <label htmlFor='searchTerm'>
                    Search
                </label>
                <div>
                    <input
                        type='text'
                        id='search'
                        placeholder='Search Track'
                        autoComplete='off'
                        value={searchTerm}
                        onChange={handleChange}
                    >
                    </input>

                    <button
                        type='submit'
                        disabled={!searchTerm}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}