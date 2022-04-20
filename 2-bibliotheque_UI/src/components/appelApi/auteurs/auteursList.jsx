import { useEffect, useState } from 'react'
import AuteurItem from "./auteurItem"

const AuteurList = function () {
    // useState
    const [auteurs, setAuteurs] = useState([])
    const auteursJSX = auteurs.map(
        elem => <AuteurItem key={elem.nom}{...elem}></AuteurItem>
    )

    // useEffect
        useEffect(() => {
            getAuteur()
        }, []) 

    // fonctions
        const getAuteur = function() {
            fetch("http://localhost:3000/auteur")
                .then(response => response.json())
                .then(data => {
                    setAuteurs(p => data)
                })  
        }

    return(
        <div>
            <p className='titre'>liste des auteurs</p>
            <div className="table-responsive contour">
                <table className="table table-striped table-sm">
                    <thead></thead>
                        {auteursJSX}
                </table>
            </div>
        </div>
    )
}

export default AuteurList