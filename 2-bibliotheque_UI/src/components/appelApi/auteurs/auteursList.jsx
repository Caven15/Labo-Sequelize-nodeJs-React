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
            fetch("http://localhost:3000/auteur")
                .then(response => response.json())
                .then(data => {
                    setAuteurs(p => data)
                })
        }, [])
        // useEffect(() => {
        //     fetch("http://localhost:3000/auteur", {
        //         method: "POST",
        //         body: JSON.stringify({ name: "Jean" })
        //     })

    return(
        <div>
            <p className='titre'>liste des auteurs</p>
            <div className="table-responsive contour">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Nom</th>
                            <th scope='col'>Prenom</th>
                            <th scope='col'>Age</th>
                        </tr>
                    </thead>
                        {auteursJSX}
                </table>
            </div>
        </div>
    )
}


export default AuteurList