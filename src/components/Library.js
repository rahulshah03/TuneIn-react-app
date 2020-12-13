import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, setIsPlaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song => <LibrarySong song={song} key={song.id} setCurrentSong={setCurrentSong} songs={songs} setIsPlaying={setIsPlaying} setSongs={setSongs}/>)
                }
            </div>
        </div>
    )
}

export default Library
