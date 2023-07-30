export default function FavoriteRobot({favoriteBots, displays}){
 const header = <div> <h3>Click on 'Add to Army' to Recruit</h3></div>
  const armyBot = favoriteBots.map((favoriteBot, index) => {
    
    function deleteRobot (){
        fetch (` http://localhost:3000/bots/${favoriteBot.id}`,{
        method : 'DELETE'
        })
        .then ((r) => r.json())

       
    }
    return (
        
  <div key={index} className = "card col-2 m-1"  >   
  <img src = {favoriteBot.avatar_url} className ="card-img-top" alt = {favoriteBot.name}/>
   <div className ="card-body">
     <h5 className ="card-title">Name : {favoriteBot.name}</h5>
       <p className ="card-text">{favoriteBot.catchphrase}</p>
           <div className="card-footer">
         <small className="text-body-secondary">Health : {favoriteBot.health}  Damage : {favoriteBot.damage};  Armor : {favoriteBot.armor} Class : {favoriteBot.bot_class} </small>
       </div>
     </div>
   <button className="btn btn-danger" id={favoriteBot.id} onClick={deleteRobot}>Delete from my Army</button>
 </div>
    )
})
    
    
    return (
       <div className="row">
        {header}
       {armyBot}     
       </div>
    )
}