
export default function RobotsDisplay ({displays, setFavoriteBots}){


  const robots = displays.map((display) => {
   
  function addToArmy (e) {
      
      const selectedBot = displays.find((display) => parseInt(display.id === e.target.id))
        parseInt(console.log(selectedBot))
    }


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
  }
  
  )
    return (
        <div className="row">
            {robots}
        </div>
    )
}