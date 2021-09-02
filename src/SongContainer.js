import React, { useState } from "react"
import { SongCard } from "./SongCard"

export const SongContainer = () => {
    const [songs, setSongs] = useState([
        {name: "Hot in Here", artist: "Nelly"},
        {name: "Intentions", artist: "The Beebs"},
        {name: "Hard to Get", artist: "Rick James"}
    ])

    const deleteSong = (selectedSong) => {
        console.log(songs.filter(song => song !== selectedSong))
        setSongs(songs.filter(song => song !== selectedSong))
    }

    return(
        <div>
            {songs.map((song) => <SongCard deleteSong={deleteSong} song={song}/>)}
        </div>
    )
}

// props = {
//     song: song
//     deleteSong: deleteSong
// }