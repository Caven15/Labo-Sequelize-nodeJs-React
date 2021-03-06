import { BsFillTrashFill, BsSearch } from "react-icons/bs"; // installation => npm install react-icons --save
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom"
import {Button} from 'react-bootstrap';
import { Stack } from "react-bootstrap";
// import AuteurList from "./auteursList";
import axios from 'axios'; 
const AuteurItem = function(props){
    const {id, nom, prenom} = props
    const navigate = useNavigate()

    // fonction 
    const deleteAuteur = function(id) {
        
        // méthode fetch
            // fetch("http://localhost:3000/auteur?id=" + id,{ 
            //     method: 'DELETE',
            //     headers: {"Content-Type":"application/json"}
            // })
            //     .then(() =>{
            //         console.log(`${id} suprimmer avec succès !`)
            //         AuteurList.getAuteur()
            //     })
            //     .catch((err) =>{
            //         console.log("Erreur de suppression de l'auteur nr : " + id)
            //         console.log(err)
            //     })
        // méthode axios
            axios.delete("http://localhost:3000/auteur?id=" + id)
                .then(() =>{
                    console.log(`${id} suprimmer avec succès !`)
                    navigate("/auteurs")
                })
                .catch((err) =>{
                    console.log("Erreur de suppression de l'auteur nr : " + id)
                    console.log(err)
                })
    }
    
    return(
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{nom}</td>
                <td>{prenom}</td>
                <td>
                <Stack className="justify-content-center" direction="horizontal" gap={3}>
                    <div><Button variant="primary"><BsSearch /></Button> </div>
                    <div><Button variant="success"><GrUpdate /></Button></div>
                    <div><Button variant="danger" onClick={() => deleteAuteur(id)}><BsFillTrashFill /></Button></div>
                </Stack>
                </td>
            </tr>
        </tbody>
    )
}
export default AuteurItem