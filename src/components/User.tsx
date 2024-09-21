import { userProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom"

import classes from "../components/UserStyled.module.css"

export const User=({public_repos,bio,name,login,avatar_url,followers,following,location}:userProps)=>{
    return (
        <div className={classes.userStyled}>
           <img src={avatar_url} alt={login} />
           <h2>{name}</h2>
           <div > <p>< MdPerson className={classes.icon}/>  <span>{login}</span> </p></div>
          
          
           <p className={classes.bio}>{bio}</p>
           <p className={classes.location}> <MdLocationPin/>  <span>{location}</span></p>
           <div className={classes.stats}>
            <div>
            <p>Repositories:</p>
            <p className={classes.number}>{public_repos}</p>
            </div>
            <div>
                <p>Followers:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            
            <div>
                <p>Following:</p>
                <p className={classes.number}>{following}</p>
            </div>
            
           </div>
           
           <Link target="blank" to={`https://github.com/${login}`}>Go to profile </Link>

        </div>
    )
}