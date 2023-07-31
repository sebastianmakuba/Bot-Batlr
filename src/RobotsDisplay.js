import React from "react";

export default function RobotsDisplay ({displays, setFavoriteBots, favoriteBots}){
  const robots = displays.map((display) => {
   
  function addToArmy (e) {
    const selectedBotId = parseInt(e.target.id)
    //to allow adding only once
    let isAlreadyEnlisted = false;
    for (const bot of favoriteBots) {
      if (bot.id === selectedBotId) {
        isAlreadyEnlisted = true;
        break;
      }
    }

    if (!isAlreadyEnlisted) {
      // Find the selected bot object from the displays array
      const selectedBot = displays.find(display => display.id === selectedBotId);

      // Update the favoriteBots list by adding the selected bot
      setFavoriteBots([...favoriteBots, selectedBot]);
    } else {
      alert('Bot already enlisted. PLease pick another one');
    }
      
  }
  //Entire collection of available robots
    return (
      <div key={display.id} className = "card col-2 m-1"  >   
       <img src = {display.avatar_url} className ="card-img-top" alt = {display.name}/>
        <div className ="card-body">
          <h5 className ="card-title">Name : {display.name}</h5>
            <p className ="card-text">{display.catchphrase}</p>
                <div className="card-footer">
              <small className="text-body-secondary">Health : {display.health}  Damage : {display.damage};  Armor : {display.armor} Class : {display.bot_class} </small>
            </div>
          </div>
        <button className="btn btn-success" id={display.id} onClick={addToArmy} >Add to my Army</button>
      </div>
    )
  
  
})
    return (
        <div className="row">
            {robots}
        </div>
    )
}