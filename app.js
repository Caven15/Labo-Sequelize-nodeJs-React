//#region imports
    const db = require("./models/connection_db")
    const http = require("http")
    const url = require("url")
    const getRequestData = require("./helper/get_request_data")
    //imports des controllers
        const auteurController = require("./controller/auteur")
        const clientController = require("./controller/client")
        const domaineController = require("./controller/domaine")
        const empruntController = require("./controller/emprunt")
        const livreController = require("./controller/livre")
//#endregion

//#region connexion
    db.sequelize.sync({}) // force: true
    http.createServer((request, response) => {
        const currentUrl = url.parse(request.url, true)
        const path = currentUrl.pathname
        const query = currentUrl.query
        response.writeHead(200, { "content-Type": "application/json" })

        //#region auteur
            // get all
            if (path === "/auteur" && request.method === 'GET' && !query.id){
                auteurController.getAllAuteurs(response)
            }
            // get one
            if (path === "/auteur" && request.method === 'GET' && query.id){
                auteurController.getOneAuteur(response, query.id)
            }
            // create
            if (path === "/auteur" && request.method === 'POST'){
                getRequestData(request)
                    .then((data) => {
                        auteurController.insertAuteur(response, data.nom, data.prenom, data.date_naissance)
                    })
            }
            // update
            if (path === "/auteur" && request.method === 'PUT' && query.id){
                getRequestData(request)
                    .then((data) => {
                        auteurController.updateAuteur(response, data.nom, data.prenom, data.date_naissance, query.id)
                    })
            }
            // delete
            if (path === "/auteur" && request.method === 'DELETE' && query.id){
                auteurController.deleteAuteur(response, query.id)
            }
        //#endregion

        //#region client
            // get all
            if (path === "/client" && request.method === 'GET' && !query.id){
                clientController.getAllClients(response)
            }
            // get one
            if (path === "/client" && request.method === 'GET' && query.id){
                clientController.getOneClient(response, query.id)
            }
            // create
            if (path === "/client" && request.method === 'POST'){
                getRequestData(request)
                    .then((data) => {
                        clientController.insertClient(response, data.nom, data.prenom, data.date_naissance, data.code_postal)
                    })
            }
            // update
            if (path === "/client" && request.method === 'PUT' && query.id){
                getRequestData(request)
                    .then((data) => {
                        clientController.updateClient(response, data.nom, data.prenom, data.date_naissance, query.id)
                    })
            }
            // delete
            if (path === "/client" && request.method === 'DELETE' && query.id){
                clientController.deleteClient(response, query.id)
            }
        //#endregion

        //#region domaine
            // get all
            if (path === "/domaine" && request.method === 'GET' && !query.id){
                domaineController.getAllDomaines(response)
            }
            // get one
            if (path === "/domaine" && request.method === 'GET' && query.id){
                domaineController.getOneDomaine(response, query.id)
            }
            // create
            if (path === "/domaine" && request.method === 'POST'){
                getRequestData(request)
                    .then((data) => {
                        domaineController.insertDomaine(response, data.nom, data.libelle)
                    })
            }
            // update
            if (path === "/domaine" && request.method === 'PUT' && query.id){
                getRequestData(request)
                    .then((data) => {
                        domaineController.updateDomaine(response, data.nom, data.libelle, query.id)
                    })
            }
            // delete
            if (path === "/domaine" && request.method === 'DELETE' && query.id){
                domaineController.deleteDomaine(response, query.id)
            }
        //#endregion

        //#region emprunt
            // get all
            if (path === "/emprunt/getAll" && request.method === 'GET' && !query.id){
                empruntController.getAllEmprunts(response)
            }
            // get all emprunt by clientId
            if (path === "/emprunt/getAllByClient" && request.method === 'GET' && query.clientId){
                empruntController.getAllEmpruntsByClientId(response, query.clientId)
            }
            // get all active emprunt by clientId
            if (path === "/emprunt/getAllActiveByClient" && request.method === 'GET' && query.clientId){
                empruntController.getAllActiveEmpruntsByClientId(response, query.clientId)
            }
            // get all emprunt finis
            if (path === "/emprunt/Fini" && request.method === 'GET'){
                empruntController.getAllEmpruntsFinis(response)
            }
            // get one
            if (path === "/emprunt" && request.method === 'GET' && query.id){
                empruntController.getOneEmprunt(response, query.id)
            }
            // create
            if (path === "/emprunt" && request.method === 'POST'){
                getRequestData(request)
                    .then((data) => {
                        empruntController.insertEmprunt(response, data.date_debut, data.date_fin, data.statut, data.clientId, data.livreId)
                    })
            }
            // update
            if (path === "/emprunt" && request.method === 'PUT' && query.id){
                getRequestData(request)
                    .then((data) => {
                        empruntController.updateEmprunt(response, data.date_debut, data.date_fin, data.statut, data.clientId, data.livreId, query.id)
                    })
            }
            // delete
            if (path === "/emprunt" && request.method === 'DELETE' && query.id){
                empruntController.deleteEmprunt(response, query.id)
            }
        //#endregion

        //#region livre
            // get all
            if (path === "/livre" && request.method === 'GET' && !query.id){
                if (query.available !== undefined) {
                    if (query.available) {
                        // Appelé la fonction qui va chercher les livres disponible
                    }
                    else {
                        // Appelé la fonction va chercher les livres indisponibles
                    }
                }
                livreController.getAllLivres(response)
            }
            // get one
            if (path === "/livre" && request.method === 'GET' && query.id){
                livreController.getOneLivre(response, query.id)
            }
            // get all by auteurId
            if (path === "/livre" && request.method === 'GET' && query.auteurId){
                livreController.getAllLivreByAuteurId(response, query.auteurId)
            }
            // get all by domaineId
            if (path === "/livre" && request.method === 'GET' && query.domaineId){
                livreController.getAllLivreByDomaineId(response, query.domaineId)
            }
            // get all livre emprunter
            if (path === "/livre/getAllEmprunt" && request.method === 'GET'){
                livreController.getLivreEmprunter(response)
            }
            // get all livre pas emprunter
            if (path === "/livre/getAllPasEmprunt" && request.method === 'GET'){
                livreController.getLivrePasEmprunter(response)
            }
            // create
            if (path === "/livre" && request.method === 'POST'){
                getRequestData(request)
                    .then((data) => {
                        livreController.insertLivre(response, data.titre, data.langue, data.isbn, data.annee , data.nbr_page, data.auteurId, data.domaineId)
                    })
            }
            // update
            if (path === "/livre" && request.method === 'PUT' && query.id){
                getRequestData(request)
                    .then((data) => {
                        livreController.updateLivre(response, data.titre, data.langue, data.isbn, data.annee , data.nbr_page, data.auteurId, data.domaineId, query.id)
                    })
            }
            // delete
            if (path === "/livre" && request.method === 'DELETE' && query.id){
                livreController.deleteLivre(response, query.id)
            }
        //#endregion

    }).listen(3000)
//#endregion