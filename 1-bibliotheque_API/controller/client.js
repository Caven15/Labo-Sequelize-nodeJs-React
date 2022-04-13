const db = require("../models/connection_db")


const clientController = {
    // get all
    getAllClients(response) {
        db.client.findAll()
            .then((data) => {
                response.write(JSON.stringify(data,null, 1))
                response.end()
            })
    },
    // get one
    getOneClient(response, id){
        db.client.findByPk(id)
            .then((data) => {
                response.write(JSON.stringify(data,null,1))
                response.end()
            })
    },
    // create
    insertClient(response, nom, prenom, date_naissance, code_postal) {
        db.client.create({
            nom: nom,
            prenom: prenom,
            date_naissance: date_naissance,
            code_postal: code_postal
        })
        .then(() => {
            response.write(JSON.stringify({message : "client inserer avec succès !"}))
            response.end()
        })
    },
    // update
    updateClient(response, nom, prenom, date_naissance, id, code_postal) {
        db.client.update({
            nom: nom,
            prenom: prenom,
            date_naissance: date_naissance,
            code_postal: code_postal
        },{where: {id: id}})
        .then(() => {
            response.write(JSON.stringify({message: "client mis a jour avec succès !"}))
            response.end()
        })
    },
    // delete
    deleteClient(response, id) {
        db.client.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            response.write(JSON.stringify({message: "client suprimmer avec succès !"}))
            response.end()
        })
    }
}
module.exports = clientController