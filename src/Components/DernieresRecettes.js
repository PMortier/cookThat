import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase.js'
import { db } from '../firebase.js'


function DernieresRecettes(){
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
        <div>
            <h1>Dernières recettes</h1>
            {recettes.map(recette => (
                <div key={recette.id}>
                    <img src="" alt={`Image de ${recette.Name}`} />
                    <p>{recette.Name}</p>
                    <p>Difficulté : {recette.Level}</p>
                    <p>Temps de préparation : {recette.Preparation} minutes</p>
                </div>
            ))}
        </div>
    )
}

export default DernieresRecettes