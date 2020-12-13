import React, { useState } from 'react';
import data from "./util"

import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState(data())
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={ setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setCurrentSong={setCurrentSong} setIsPlaying={ setIsPlaying} songs={songs}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} setSongs={ setSongs} libraryStatus={libraryStatus}/>
    </div>
  );
}

export default App;
