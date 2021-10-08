import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'
import classes from './DernieresRecettes.module.css'
import { Link } from 'react-router-dom'


function DernieresRecettes({ setRecette }){
    const [recettes, setRecettes] = useState([])
    
    //Récupération des recettes de la BDD
    useEffect(() => {
        const getRecettes = async () => {
            const collectionReference = collection(db, 'recettes')
            const snapshot = await getDocs(collectionReference)

            const listRecettes = []

            for(let doc of snapshot.docs) {
                const recette = { id: doc.id, ...doc.data()}
                listRecettes.push(recette)
            }

            setRecettes(listRecettes)
        }
        getRecettes()
    },[])

    return(
        <div className={classes.container}>
            <h1>Dernières recettes</h1>
            {recettes.map(recette => (
                <div key={recette.id}>
                    <Link to={`/recette/${recette.id}`} onClick={()=>setRecette(recette)}><img src={recette.file} alt={`Image de ${recette.name}`} className={classes.image}/></Link>
                    <p>{recette.name}</p>
                    <p>Difficulté : {recette.level}</p>
                    <p>Temps de préparation : {recette.preparationTime} minutes</p>
                </div>
            ))}
        </div>
    )
}

export default DernieresRecettes