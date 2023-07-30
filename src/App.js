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

  return (
    <div >
      <FavoriteRobot displays = {displays}/>
      <RobotsDisplay displays = {displays} setDisplays = {setDisplays}/>
    </div>
  );
}

export default App;
