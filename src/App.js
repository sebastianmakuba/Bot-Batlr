import './App.css';
import React from 'react';
import { useState , useEffect} from 'react';
import ArmyRobot from './ArmyRobot';
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
      <ArmyRobot favoriteBots={favoriteBots} />
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
