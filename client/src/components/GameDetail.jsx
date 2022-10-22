import React, { useEffect } from "react";
import { getGameDetail, skeleGame } from "../global/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getGames } from "../global/actions";

const GameDetail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch()
    const game = useSelector(state=>state.game)
    useEffect(()=>{
        dispatch(skeleGame());
        dispatch(getGameDetail(id))
    },[dispatch, id])


    return <div>
        {
        game!==null?<>
            <Link to="/videogames" ><span>Go Back↩</span></Link>
            <hr/>
            <div>
                <div>
                    <div>
                        {game.launch_date && <h2>{game.launch_date.split('-')[0]},_</h2>} 
                        {game.name && <h2>{game.name}</h2>}
                    </div>
                    <p>{`Rating: ${game.rating}`}</p>
                    <br/>
                    <p>{game.description}</p>
                    <br/>
                    {game.platforms && <strong>{game.platforms.map(({name})=>name).join(', ')}</strong>}
                </div>
            <div>
                <img src={game.thumbnail} alt="una fotito del jueguito"/>
                <strong>{game.genres && game.genres.map(({name})=>name).join(', ')}</strong>
            </div>
        </div>
        </>
    :
    <h1>...</h1>
    }
</div>
}

export default GameDetail