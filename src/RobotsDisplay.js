
import React, { useEffect, useState } from "react";

export default function RobotsDisplay (){

const [displays, setDisplays] = useState ([])

useEffect(() =>  {fetch ('http://localhost:3000/bots')
.then (response => response.json())
.then (data  => setDisplays(data))
}, [])

const robots = displays.map((display) => 
<li key={display.id}>{display.name}</li>
)
    return (
        <div>
            {robots}
        </div>
    )
}