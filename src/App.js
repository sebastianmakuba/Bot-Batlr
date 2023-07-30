import './App.css';
import { useState , useEffect} from 'react';
import FavoriteRobot from './FavoriteRobot';
import RobotsDisplay from './RobotsDisplay';
function App() {

  useEffect(() =>  {fetch ('http://localhost:3000/bots')
  .then (response => response.json())
  .then (data  => setDisplays(data))
  }, [])

  const [displays, setDisplays] = useState ([])
  
  function addToFavorites (e){
    console.log(e.target.id)

  }

  return (
    <div >
      <FavoriteRobot displays = {displays} addToFavorites={addToFavorites}/>
      <RobotsDisplay displays = {displays} setDisplays = {setDisplays} addToFavorites = {addToFavorites}/>
    </div>
  );
}

export default App;
