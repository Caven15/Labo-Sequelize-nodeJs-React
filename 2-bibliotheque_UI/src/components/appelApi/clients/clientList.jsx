import { useEffect, useState } from "react"
import ClientItem from "./clientItem"

const ClientList = function () {
    //useState
    const [clients, setClients] = useState([])
    const clientsJSX = clients.map(
        elem => <ClientItem key={elem.nom}{...elem}></ClientItem>
    )
    

    //useEffect
        useEffect(() => {
            fetch("http://localhost:3000/client")
                .then(response => response.json())
                .then(data => {
                    setClients(p => data)
                })
            }, [])
        
    return(
        <div>
            <p className='titre'>liste des clients</p>
            <div className="table-responsive contour">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Nom</th>
                            <th scope='col'>Prenom</th>
                            <th scope='col'>Code Postal</th>
                            <th scope='col'>Age</th>
                        </tr>
                    </thead>
                        {clientsJSX}
                </table>
            </div>
        </div>
    )
}

export default ClientList