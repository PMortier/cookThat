import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.js'
import classes from './Recette.module.css'

function Recette({recette: defaultRecette}) {
    const { recetteId } = useParams()
    const [recette, setRecette] = useState(defaultRecette)
    
    useEffect(()=>{
        const getRecette = async () => {

            const recetteRef = doc(db, 'recettes', recetteId)
            const document = await getDoc(recetteRef)
            const receivedRecette = { id: document.id, ...document.data() }
            setRecette(receivedRecette)
        }

        if(!defaultRecette) getRecette()
    }, [])

    if(!recette){
        return <p>Chargement...</p>
    }

    return(
        <div className={classes.container}> 
            <h1>Page de la recette</h1>
            <h2>{recette.name}</h2>
            <img src={recette.file} alt={`Image de ${recette.name}`} className={classes.image}/>
            <p>{recette.preparationTime} min - {recette.level}</p>
            <p>{recette.nbPersonnes} personnes</p>
            <h2>Ingrédients</h2>
            <p>{recette.ingredients}</p>
            <h2>Préparation</h2>
            <p>{recette.etapes}</p>
        </div>
    )
}

export default Recette    