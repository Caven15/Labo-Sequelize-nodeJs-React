const db = require("../models/connection_db")


const domaineController = {
    // get all
    getAllDomaines(response) {
        db.domaine.findAll()
            .then((data) => {
                response.write(JSON.stringify(data,null, 1))
                response.end()
            })
    },
    // get one
    getOneDomaine(response, id){
        db.domaine.findByPk(id)
            .then((data) => {
                response.write(JSON.stringify(data,null,1))
                response.end()
            })
    },
    // create
    insertDomaine(response, nom, libelle) {
        db.domaine.create({
            nom: nom,
            libelle: libelle
        })
        .then(() => {
            response.write(JSON.stringify({message : "domaine inserer avec succès !"}))
            response.end()
        })
    },
    // update
    updateDomaine(response, nom, libelle, id) {
        db.domaine.update({
            nom: nom,
            libelle: libelle
        },{where: {id: id}})
        .then(() => {
            response.write(JSON.stringify({message: "domaine mis a jour avec succès !"}))
            response.end()
        })
    },
    // delete
    deleteDomaine(response, id) {
        db.domaine.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            response.write(JSON.stringify({message: "domaine suprimmer avec succès !"}))
            response.end()
        })
    }
}
module.exports = domaineController