import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'

function navbar(){
    return(
        <div className={classes.container}>
            <NavLink exact to="/dernieresrecettes" className={`${classes.containerIcon}`} activeClassName={`${classes.active}`}>
                <FontAwesome name="home" className={`${classes.icon}`} />
            </NavLink>
            <NavLink exact to="/ajoutrecette" activeClassName={`${classes.active}`} className={`${classes.containerIcon}`}>
                <div>
                <FontAwesome className={`${classes.icon}`} name="plus-square"/>
                </div>
            </NavLink>
            <NavLink exact to="/profil" activeClassName={`${classes.active}`} className={`${classes.containerIcon}`}>
                <div>
                <FontAwesome className={`${classes.icon}`} name="user"/>
                </div>
            </NavLink>
        </div>
    )
}

export default navbar