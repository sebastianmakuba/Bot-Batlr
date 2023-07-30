import './App.css';
import { useState , useEffect} from 'react';
import FavoriteRobot from './FavoriteRobot';
import RobotsDisplay from './RobotsDisplay';
function App() {
  const [displays, setDisplays] = useState ([])
  const [favoriteBots, setFavoriteBots] = useState([]);

  useEffect(() =>  {fetch ('http://localhost:3000/bots')
  .then (response => response.json())
  .then (data  => setDisplays(data))
  }, [])

  
  return (
    <div >
      <FavoriteRobot displays = {displays} favoriteBots={favoriteBots} setFavoriteBots = {setFavoriteBots}/>
      <RobotsDisplay 
      displays = {displays} 
      setDisplays = {setDisplays} 
      favoriteBots = {favoriteBots}
      setFavoriteBots = {setFavoriteBots}
      />
    </div>
  );
}

export default App;
