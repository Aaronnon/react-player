import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className='App'>
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
