import React from 'react'
import axios from 'axios'

export default function Search({ setTracks, setToken, setCurrentTrack, setLoggedIn, token }){
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

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
            console.log("new")
            setTracks(null)
            setToken('')
            setCurrentTrack(null)
            setLoggedIn(false)
            console.log("set logged in to false")
        })
    }

    return(
        <div className="row justify-start jost search">
            <form onSubmit={handleSearch} className="search-form">
                <label htmlFor='searchTerm'>
                    🔎
                </label>
                <div>
                    <input
                        type='text'
                        id='search'
                        placeholder='Track Name / Artist Name / Album Name'
                        autoComplete='off'
                        value={searchTerm}
                        onChange={handleChange}
                        className="jost"
                        className="search-input"
                    >
                    </input>

                    <button
                        type='submit'
                        disabled={!searchTerm}
                        className="jost search-btn"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}