import {auth} from '../firebase.js'
import { signOut } from "firebase/auth";

function Deconnexion({setUser}){
    const logout = async ()=>{
        await signOut(auth)
        setUser(null)
    }

    return(
        <button onClick={logout}>Déconnexion</button>
    )
}

export default Deconnexion