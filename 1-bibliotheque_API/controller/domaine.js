const db = require("../models/connection_db")
const { Op } = require("sequelize");

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
    // get domaine favoris
        async getDomaineFavoris(response) {
            const data = await db.livre.findAll({
                include: [
                    {
                        model: db.emprunt, 
                        attributes:{
                            exclude: ['id','date_debut', 'date_fin', 'statut',  'createdAt', 'updatedAt', 'clientId', 'livreId']
                        }, 
                        where: {id: {[Op.not]: null}}
                    },
                    {
                        model: db.domaine, 
                        attributes:['nom']
                    }
                ],
                attributes:{
                    exclude: ['id','titre','langue', 'isbn', 'annee', 'nbr_page', 'createdAt', 'updatedAt', 'auteurId', 'domaineId']
                }
            })

            let listeNomDomaine = [], resultatNomDomaine = [], resultatNombreDomaine = [], temporaire = 0, compteur = 0

            for (let i = 0; i < data.length; i++) {
                listeNomDomaine.push(data[i].domaine.nom)
            }
            
            for (const element of listeNomDomaine){
                resultatNomDomaine.push(element)
                compteur = 0
                for (let i = 0; i < listeNomDomaine.length; i++) {
                    if (element == listeNomDomaine[i]) {
                        compteur += 1
                    }
                    
                }
                resultatNombreDomaine.push(compteur)
            }

            for (let i = 0; i < resultatNombreDomaine.length; i++) {
                if (resultatNombreDomaine[i] > temporaire){
                    temporaire = resultatNombreDomaine[i]
                }
            }

            const domaine = await db.domaine.findAll({
                where: {
                    id: temporaire
                },
                attributes:{
                    exclude: ['createdAt', 'updatedAt']
                }
            })

            response.write(JSON.stringify(domaine, null, 2))
            response.end()
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