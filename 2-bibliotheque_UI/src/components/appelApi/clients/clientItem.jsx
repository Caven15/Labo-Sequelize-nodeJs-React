const ClientItem = function(props){
    const {id, nom, prenom, date_naissance, code_postal} = props

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
                    <td>{code_postal}</td>
                    <td>{tmp}</td>
                </tr>
            </tbody>
    )
}
export default ClientItem