export default function FavoriteRobot({displays, favoriteBots, SetFavoriteBots}){
 
  const armyBot = 
    <div>     
        <div className="card col-2" >
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  <button className="btn btn-danger" >Remove From Favorites</button>
    </div>

    
    return (
       <div className="row">
       {armyBot}     
       </div>
    )
}