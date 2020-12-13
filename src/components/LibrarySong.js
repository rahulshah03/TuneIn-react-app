import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, setIsPlaying }) => {
    
    const selectSongHandler = () => {
        const selectedSong = songs.filter(s => s.id === song.id)[0]
        setCurrentSong(selectedSong)
        console.log(1)
    }

    return (
        <div onClick ={selectSongHandler} className="library-song">
            <img src={song.cover} alt="coverImage" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
