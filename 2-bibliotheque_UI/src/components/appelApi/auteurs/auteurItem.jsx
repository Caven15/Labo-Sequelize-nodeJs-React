// import Container from 'react-bootstrap/Container';
const AuteurItem = function(props){
    const {id, nom, prenom, date_naissance} = props


    const anneeNaissance = new Date(date_naissance)
    return(
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{nom}</td>
                <td>{prenom}</td>
                <td>{anneeNaissance.getFullYear()}</td>
            </tr>
        </tbody>
        
        
    )
}
export default AuteurItem