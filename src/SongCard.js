import React from "react"

export const SongCard = ({song, deleteSong}) => {
    return(
        <div>
            <h1>{song.name}</h1>
            <h2>{song.artist}</h2>
            <button onClick={() => deleteSong(song)}>Delete</button>
        </div>
    )
}