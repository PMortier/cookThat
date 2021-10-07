import { getAuth } from "firebase/auth";
import { Redirect } from 'react-router-dom';

function profil({user}){
    if(!user){
        return <Redirect to="/"></Redirect>
    }
        return (
             <div>
                <h1>Mon profil</h1>
                <button>Mes recettes</button>
                <p>Formulaire avec Email / Nom d'utilisateur / Nouveau mot de passe / Submit : mettre à jour mes informations</p>
            </div>
        );

}

export default profil