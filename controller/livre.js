const db = require("../models/connection_db")


const livreController = {
    // get all
    getAllLivres(response) {
        db.livre.findAll()
            .then((data) => {
                response.write(JSON.stringify(data,null, 1))
                response.end()
            })
    },
    // get all by auteurId
    getAllLivreByAuteurId(response, auteurId){
        db.livre.findAll({where: {auteurId: auteurId}
    })
    .then((data) => {
        response.write(JSON.stringify(data,null,1))
        response.end()
    })
    },
    // get all by domaineId
    getAllLivreByDomaineId(response, domaineId){
        db.livre.findAll({where: {domaineId: domaineId}
    })
    .then((data) => {
        response.write(JSON.stringify(data,null,1))
        response.end()
    })
    },
    // get one
    getOneLivre(response, id){
        db.livre.findByPk(id)
            .then((data) => {
                response.write(JSON.stringify(data,null,1))
                response.end()
            })
    },
    // create
    insertLivre(response, titre, langue, isbn, annee , nbr_page, auteurId, domaineId) {
        db.livre.create({
            titre: titre,
            langue: langue,
            isbn: isbn,
            annee: annee,
            nbr_page: nbr_page,
            auteurId: auteurId,
            domaineId: domaineId
        })
        .then(() => {
            response.write(JSON.stringify({message : "livre inserer avec succès !"}))
            response.end()
        })
    },
    // update
    updateLivre(response, titre, langue, isbn, annee , nbr_page, auteurId, domaineId, id) {
        db.livre.update({
            titre: titre,
            langue: langue,
            isbn: isbn,
            annee: annee,
            nbr_page: nbr_page,
            auteurId: auteurId,
            domaineId: domaineId
        },{where: {id: id}})
        .then(() => {
            response.write(JSON.stringify({message: "livre mis a jour avec succès !"}))
            response.end()
        })
    },
    // delete
    deleteLivre(response, id) {
        db.livre.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            response.write(JSON.stringify({message: "livre suprimmer avec succès !"}))
            response.end()
        })
    }
}
module.exports = livreController