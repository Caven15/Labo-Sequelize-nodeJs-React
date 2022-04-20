import { BsFillTrashFill, BsSearch } from "react-icons/bs"; // installation => npm install react-icons --save
import { GrUpdate } from "react-icons/gr";
import {Button} from 'react-bootstrap';
import { Stack } from "react-bootstrap";
import AuteurList from "./auteursList";
const AuteurItem = function(props){
    const {id, nom, prenom} = props

    // fonction 
    const deleteAuteur = function(id) {
        fetch(`localhost:3000/auteur?id=${id}`,{ 
            method: "DELETE"
        })
            .then((data) =>{
                data.json().then((response) =>{
                    console.warn(response)
                    AuteurList.getAuteur()
                })
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
                <Stack className="justify-content-center" direction="horizontal" gap={5}>
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