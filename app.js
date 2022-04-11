//#region imports
    const http = require("http")
    const url = require("url")
    //imports des controllers
        //...
//#endregion

//#region connexion
    http.createServer((request, response) => {
        const currentUrl = url.parse(request.url, true)
        const path = currentUrl.pathname
        const query = currentUrl.query
        response.writeHead(200, { "content-Type": "application/json" })

        //#region auteur
            // get all
            if (path === "/auteur" && request.method === 'GET' && !query.id){
                //...
            }
            // get one
            if (path === "/auteur" && request.method === 'GET' && query.id){
                //...
            }
            // create
            if (path === "/auteur" && request.method === 'POST'){
                //...
            }
            // update
            if (path === "/auteur" && request.method === 'PUT'){
                //...
            }
            // delete
            if (path === "/auteur" && request.method === 'DELETE'){
                //...
            }
        //#endregion

        //#region client
            // get all
            if (path === "/client" && request.method === 'GET' && !query.id){
                //...
            }
            // get one
            if (path === "/client" && request.method === 'GET' && query.id){
                //...
            }
            // create
            if (path === "/client" && request.method === 'POST'){
                //...
            }
            // update
            if (path === "/client" && request.method === 'PUT'){
                //...
            }
            // delete
            if (path === "/client" && request.method === 'DELETE'){
                //...
            }
        //#endregion

        //#region domaine
            // get all
            if (path === "/domaine" && request.method === 'GET' && !query.id){
                //...
            }
            // get one
            if (path === "/domaine" && request.method === 'GET' && query.id){
                //...
            }
            // create
            if (path === "/domaine" && request.method === 'POST'){
                //...
            }
            // update
            if (path === "/domaine" && request.method === 'PUT'){
                //...
            }
            // delete
            if (path === "/domaine" && request.method === 'DELETE'){
                //...
            }
        //#endregion

        //#region emprunt
            // get all
            if (path === "/emprunt" && request.method === 'GET' && !query.id){
                //...
            }
            // get one
            if (path === "/emprunt" && request.method === 'GET' && query.id){
                //...
            }
            // create
            if (path === "/emprunt" && request.method === 'POST'){
                //...
            }
            // update
            if (path === "/emprunt" && request.method === 'PUT'){
                //...
            }
            // delete
            if (path === "/emprunt" && request.method === 'DELETE'){
                //...
            }
        //#endregion

        //#region livre
            // get all
            if (path === "/livre" && request.method === 'GET' && !query.id){
                //...
            }
            // get one
            if (path === "/livre" && request.method === 'GET' && query.id){
                //...
            }
            // create
            if (path === "/livre" && request.method === 'POST'){
                //...
            }
            // update
            if (path === "/livre" && request.method === 'PUT'){
                //...
            }
            // delete
            if (path === "/livre" && request.method === 'DELETE'){
                //...
            }
        //#endregion
        
    })
//#endregion