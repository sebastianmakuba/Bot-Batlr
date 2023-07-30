
import React, { useEffect, useState } from "react";

export default function RobotsDisplay (){

const [displays, setDisplays] = useState ([])

useEffect(() =>  {fetch ('http://localhost:3000/bots')
.then (response => response.json())
.then (data  => setDisplays(data))
}, [])

const robots = displays.map((display) => 
<div key={display.id} className = "card col-3 m-1"  >   
  <img src = {display.avatar_url} className ="card-img-top" alt = {display.name}/>
  <div className ="card-body">
    <h5 className ="card-title">{display.name}</h5>
    <p className ="card-text">{display.health}</p>
   
  </div>
  </div>
 


)
    return (
        <div className="row">
            {robots}
        </div>
    )
}