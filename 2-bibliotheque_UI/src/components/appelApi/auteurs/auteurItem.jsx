const AuteurItem = function(props){
    const {nom, prenom, date_naissance} = props

    const anneeNaissance = new Date(date_naissance)
    return(
        <div className="auteurItem">
            <div className="conteneur">
            <span className="auteurItemTexteBegin">nom :{nom}</span>

            </div>
            <div className="conteneur">
            <span className="auteurItemTexteCenter">prénom : {prenom}</span>
            </div>
            <div className="conteneur">

            <span className="auteurItemTexteEnd">année de naissance : {anneeNaissance.getFullYear()}</span>
            </div>
        </div>
    )
}

export default AuteurItem