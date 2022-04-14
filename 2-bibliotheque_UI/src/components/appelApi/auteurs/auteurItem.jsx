const AuteurItem = function(props){
    const {nom, prenom, date_naissance} = props

    const anneeNaissance = new Date(date_naissance)
    return(
        <div className="auteurItem">
            <div className="conteneur">
                <span>nom : {nom}</span> 
            </div>
            <div className="conteneur">
                <span>prénom : {prenom}</span>
            </div>
            <div className="conteneur">
                <span>année : {anneeNaissance.getFullYear()}</span>
            </div>
        </div>
    )
}
export default AuteurItem