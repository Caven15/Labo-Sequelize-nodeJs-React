const db = require("../models/connection_db")
const { Op } = require("sequelize");


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
    // get livre emprunter
        async getLivreEmprunter(response) {
            const data = await db.emprunt.findAll({
                where: {
                    statut: true
                }
            })
            const livresEmprunter = []
            for (const element of data) {
                const livre = await element.getLivre()
                livresEmprunter.push(livre)
            }

            response.write(JSON.stringify(livresEmprunter))
            response.end()
        },
    // get livre pas emprunter
        async getLivrePasEmprunter(response) {
            const data = await db.emprunt.findAll({
                where: {
                    statut: true
                }
            })
            const livresEmprunterId = []
            for (const element of data) {
                livresEmprunterId.push(element.livreId)
            }

            const livre = await db.livre.findAll()
            const livresPasEmprunter = livre.filter(
                elem => !livresEmprunterId.includes(elem.id)
            )
            response.write(JSON.stringify(livresPasEmprunter, null, 2))
            response.end()
        },
    // get livre favoris
        async getLivreFavoris(response) {

            const data = await db.emprunt.findAndCountAll({
                attributes: ['livreId'],
                distinct: true,
                group: "livreId"
            })

            let tmp = 0
            const indiceMax = []

            for (const element of data.count) {
                if (element.count > tmp) {
                    tmp = element.count
                }
            }

            for(let i = 0; i < data.count.length; i++) {
                if (data.count[i].count === tmp) {
                    indiceMax.push(i)
                }
            }

            const livreFavoris = data.rows.filter(
                (elem, indice) => indiceMax.includes(indice)
            )

            const livreFavOk = livreFavoris.map(
                elem => ({ id: elem.livreId})
            )

            const livres = await db.livre.findAll({
                where:{
                    [Op.or]: livreFavOk
                }
            })

            response.write(JSON.stringify(livres, null, 2))
            response.end()
        },
    // get one
        getOneLivre(response, id){
            db.livre.findByPk(id)
                .then((data) => {
                    response.write(tpm)
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