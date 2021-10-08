import { useState } from 'react'
import classes from './AjoutRecette.module.css'
import FontAwesome from 'react-fontawesome';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../firebase.js'

function CreateRecette({user}) {
    const [name, setName] = useState("")
    const [file, setFile] = useState(null)
    const [level, setLevel] = useState("")
    const [preparationTime, setPreparationTime] = useState(0)
    const [reposTime, setReposTime] = useState(0)
    const [cuissonTime, setCuissonTime] = useState(0)
    const [nbPersonnes, setNbPersonnes] = useState(0)
    const [ingredients, setIngredients] = useState("")
    const [etapes, setEtapes] = useState("")

    const send = async ev => {
        ev.preventDefault()
        //Création référence storage pour y stocker la photo
        const photoRef = ref(storage, file.name)

        //Upload de la photo dans le storage
        const snapshot = await uploadBytes(photoRef, file)

        //Récupération du lien de la photo stockée dans le storage
        const urlPhoto = await getDownloadURL(snapshot.ref)

        //Création de la recette
        const recette = {
            name,
            file : urlPhoto,
            level,
            preparationTime,
            reposTime,
            cuissonTime,
            nbPersonnes,
            ingredients,
            etapes
        }

        //Récupération de la référence vers la collection recettes
        const collectionReference = collection(db, 'recettes')

        //Ajout du document recette dans la collection recettes
        const result = await addDoc(collectionReference, recette)

        alert("Recette enregistrée")

    }

    const changeName = ev => setName(ev.target.value)
    const handlePhoto = ev => {
        // Récupération de la photo téléchargée par l'utilisateur
        // file est on object : https://developer.mozilla.org/fr/docs/Web/API/File
        setFile(ev.target.files[0])
    }
    const changeLevel = ev => setLevel(ev.target.value)
    const changePreparationTime = ev => setPreparationTime(ev.target.value)
    const changeReposTime = ev => setReposTime(ev.target.value)
    const changeCuissonTime = ev => setCuissonTime(ev.target.value)
    const changeNbPersonnes = ev => setNbPersonnes(ev.target.value)
    const changeIngredients = ev => setIngredients(ev.target.value)
    const changeEtapes = ev => setEtapes(ev.target.value)

    return(
        <div className={classes.container}>
            <h1>Ajouter une recette</h1>
            <form onSubmit={send}>
                <h2>Nom de la recette</h2>
                <input type="text" placeholder="Nom de la recette" onChange={changeName}/>
                <h2>Photo</h2>
                <FontAwesome name="image" className={classes.photo}/>
                <input type="file" id="photo" onChange={handlePhoto}/>
                <h2>Difficulté</h2>
                <select name="level" id="level" onChange={changeLevel} required>
                    <option value="" disabled selected hidden>Choisir une difficulté</option>
                    <option value="facile">Facile</option>
                    <option value="moyen">Moyen</option>
                    <option value="difficile">Difficile</option>
                </select>
                <h2>Temps de preparation (en minutes)</h2>
                <input type="number" min="0" placeholder="Temps de préparation" onChange={changePreparationTime}/>
                <h2>Temps de repos (en minutes)</h2>
                <input type="number" min="0" placeholder="Temps de repos" onChange={changeReposTime}/>
                <h2>Temps de cuisson (en minutes)</h2>
                <input type="number" min="0" placeholder="Temps de cuisson" onChange={changeCuissonTime}/>
                <h2>Nombre de personnes</h2>
                <input type="number" min="0" placeholder="Nombre de personnes " onChange={changeNbPersonnes}/>
                <h2>Ingrédients</h2>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10" onChange={changeIngredients}></textarea>
                <h2>Etapes</h2>
                <textarea name="etapes" id="etapes" cols="30" rows="10" onChange={changeEtapes}></textarea>
                <div>
                    <button type="submit" className={classes.submit}>Sauvegarder</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRecette;