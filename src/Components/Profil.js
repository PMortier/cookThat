import { auth } from '../firebase.js';
import { Redirect } from 'react-router-dom';

function Profil({user}){
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

export default Profil