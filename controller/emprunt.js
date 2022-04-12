const db = require("../models/connection_db")


const empruntController = {
    // get all
    getAllEmprunts(response) {
        db.emprunt.findAll()
            .then((data) => {
                response.write(JSON.stringify(data,null, 1))
                response.end()
            })
    },
    // get one
    getOneEmprunt(response, id){
        db.emprunt.findByPk(id)
            .then((data) => {
                response.write(JSON.stringify(data,null,1))
                response.end()
            })
    },
    // create
    insertEmprunt(response, date_debut, date_fin, statut, clientId, livreId) {
        db.emprunt.create({
            date_debut: date_debut,
            date_fin: date_fin,
            statut: statut,
            clientId: clientId,
            livreId: livreId
        })
        .then(() => {
            response.write(JSON.stringify({message : "emprunt inserer avec succès !"}))
            response.end()
        })
    },
    // update
    updateEmprunt(response, nom, libelle, id) {
        db.emprunt.update({
            nom: nom,
            libelle: libelle
        },{where: {id: id}})
        .then(() => {
            response.write(JSON.stringify({message: "emprunt mis a jour avec succès !"}))
            response.end()
        })
    },
    // delete
    deleteEmprunt(response, id) {
        db.emprunt.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            response.write(JSON.stringify({message: "emprunt suprimmer avec succès !"}))
            response.end()
        })
    }
}
module.exports = empruntController