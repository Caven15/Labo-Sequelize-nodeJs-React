require ("dotenv").config()
const { Sequelize, DataTypes } =require("sequelize")
const auteurModel = require("./tables/auteur_model")
const clientModel = require("./tables/client_model")
const domaineModel = require("./tables/domaine_model")
const empruntModel = require("./tables/emprunt_model")
const livreModel = require("./tables/livre_model")


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // logging: false   => permet de réduire les infos sql dans la console
})
const db = {
    Sequelize: Sequelize,
    sequelize, sequelize,
    auteur: auteurModel(sequelize,DataTypes),
    client: clientModel(sequelize,DataTypes),
    domaine: domaineModel(sequelize,DataTypes),
    emprunt: empruntModel(sequelize,DataTypes),
    livre: livreModel(sequelize,DataTypes)
}

// ici on ajoute les associations 
    // un livre a un seul auteur
        livre.hasOne(auteur);
        auteur.belongsTo(livre);

    // un livre a un seul domaine
        livre.hasOne(domaine);
        domaine.belongsTo(livre);

    // un enprunt a un seul client
        emprunt.hasOne(client);
        client.belongsTo(emprunt);

    // un emprunt a un seul livre
        emprunt.hasOne(livre);
        livre.belongsTo(emprunt);

module.exports = db

