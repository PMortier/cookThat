import { useState } from 'react'
import classes from './AjoutRecette.module.css'
import FontAwesome from 'react-fontawesome';

function CreateRecette({user}) {
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [level, setLevel] = useState("")
    const [preparationTime, setPreparationTime] = useState(0)
    const [reposTime, setReposTime] = useState(0)
    const [cuissonTime, setCuissonTime] = useState(0)
    const [nbPersonnes, setNbPersonnes] = useState(0)
    const [ingredients, setIngredients] = useState("")
    const [etapes, setEtapes] = useState("")


    return(
        <div className={classes.container}>
            <h1>Ajouter une recette</h1>
            <form>
                <h2>Nom de la recette</h2>
                <input type="text" placeholder="Nom de la recette" />
                <h2>Photo</h2>
                <FontAwesome name="image" className={classes.photo}/>
                <button>Télécharger photo</button>
                <h2>Difficulté</h2>
                <select name="level" id="level">
                    <option value="facile">Facile</option>
                    <option value="moyen">Moyen</option>
                    <option value="difficile">Difficile</option>
                </select>
                <h2>Temps de preparation (en minutes)</h2>
                <input type="number" min="1" placeholder="Temps de préparation"/>
                <h2>Temps de repos (en minutes)</h2>
                <input type="number" min="1" placeholder="Temps de repos"/>
                <h2>Temps de cuisson (en minutes)</h2>
                <input type="number" min="1" placeholder="Temps de cuisson"/>
                <h2>Nombre de personnes</h2>
                <input type="number" min="1" placeholder="Nombre de personnes "/>
                <h2>Ingrédients</h2>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10"></textarea>
                <h2>Etapes</h2>
                <textarea name="etapes" id="etapes" cols="30" rows="10"></textarea>
                <div>
                    <button type="submit" className={classes.submit}>Sauvegarder</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRecette