// import Container from 'react-bootstrap/Container';
const AuteurItem = function(props){
    const {id, nom, prenom, date_naissance} = props


    let date = new Date()
    let dateNaissance = new Date(date_naissance)
    let tmp = date.getFullYear()
    tmp -= dateNaissance.getFullYear()
    return(
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{nom}</td>
                <td>{prenom}</td>
                <td>{tmp}</td>
            </tr>
        </tbody>
        
        
    )
}
export default AuteurItem