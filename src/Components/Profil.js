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
                <form>
                <h2>Email</h2>
                <input type="text" placeholder="Email"/>
                <h2>Nom de l'utilisateur</h2>
                <input type="text" placeholder="Nom"/>
                <h2>Nouveau mot de passe</h2>
                <input type="text" placeholder="Mot de passe"/>
                <div>
                    <button type="submit" class="btn">Mettre à jour mes informations</button>
                </div>
            </form>
            </div>
        );

}

export default Profil