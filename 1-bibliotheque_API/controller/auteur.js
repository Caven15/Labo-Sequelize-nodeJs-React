const db = require("../models/connection_db")
const { Op } = require("sequelize")
const { Sequelize } = require("sequelize")


const auteurController = {
    // get all
    getAllAuteurs(response) {
        db.auteur.findAll()
            .then((data) => {
                response.write(JSON.stringify(data,null, 1))
                response.end()
            })
    },
    // get one
    getOneAuteur(response, id){
        db.auteur.findByPk(id)
            .then((data) => {
                response.write(JSON.stringify(data,null,1))
                response.end()
            })
    },
    // get auteur favoris
    async getAuteurFavoris(response) {
        const data = await db.livre.findAll({
            include: [
                {
                    model: db.auteur,
                    attributes: ['nom'],
                },
                {
                    model: db.emprunt,
                    attributes:{
                        include: [[Sequelize.fn("COUNT", Sequelize.col("statut")), "nombreEmprunt"]],
                        exclude: ['id','date_debut', 'date_fin', 'statut',  'createdAt', 'updatedAt', 'clientId', 'livreId']
                    },
                    where: {id: {[Op.not]: null}}
                },
                
            ],
            attributes:['id'],
            group: "id"
        })

        let listeNomAuteur = [], listeNombreEmprunt = [], listeNomAuteurFiltrer = [], listeNombreEmpruntFiltrer = []
        let nombreTempo = 0, nomTempo = "", nombreFinal = 0, nomFinal


        for (let i = 0; i < data.length; i++) {
            console.log(data[i].emprunts[0])
            listeNomAuteur.push(data[i].auteur.nom)
            listeNombreEmprunt.push(data[i].emprunts[0].toJSON().nombreEmprunt)
        }

        for (let i = 0; i < data.length; i++) {
            nomTempo = listeNomAuteur[i]
            nombreTempo = 0
            for (let i = 0; i < data.length; i++) {
                if (nomTempo === listeNomAuteur[i]) {
                    nombreTempo += listeNombreEmprunt[i]
                }
            }
            listeNombreEmpruntFiltrer.push(nombreTempo)
            listeNomAuteurFiltrer.push(nomTempo)

            for (let i = 0; i < listeNombreEmpruntFiltrer.length; i++) {
                if (nombreFinal < listeNombreEmpruntFiltrer[i]) {
                    nomFinal = listeNomAuteurFiltrer[i]
                    nombreFinal = listeNombreEmpruntFiltrer[i]
                }
            }
        }

        const auteurFavoris = await db.auteur.findAll({
            where:{
                nom: nomFinal
            }
        })

        response.write(JSON.stringify(auteurFavoris, null, 2))
        response.end()
    },
    // create
    insertAuteur(response, nom, prenom, date_naissance) {
        console.log(nom, prenom, date_naissance)
        db.auteur.create({
            nom: nom,
            prenom: prenom,
            date_naissance: date_naissance
        })
        .then(() => {
            response.write(JSON.stringify({message : "auteur inserer avec succ??s !"}))
            response.end()
        })
    },
    // update
    updateAuteur(response, nom, prenom, date_naissance, id) {
        db.auteur.update({
            nom: nom,
            prenom: prenom,
            date_naissance: date_naissance
        },{where: {id: id}})
        .then(() => {
            response.write(JSON.stringify({message: "auteur mis a jour avec succ??s !"}))
            response.end()
        })
    },
    // delete
    deleteAuteur(response, id) {
        console.log("tutut")
        db.auteur.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            response.write(JSON.stringify({message: "auteur suprimmer avec succ??s !"}))
            response.end()
        })
    }
}
module.exports = auteurController