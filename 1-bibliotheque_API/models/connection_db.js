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
    port: 3308, // changer le port en fonction de cui actif sur mysql
    loging: false  // => permet de réduire les infos sql dans la console
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
        db.auteur.hasMany(db.livre);
        db.livre.belongsTo(db.auteur);

    // un livre a un seul domaine
        db.domaine.hasMany(db.livre);
        db.livre.belongsTo(db.domaine);

    // un enprunt a un seul client
        db.client.hasMany(db.emprunt);
        db.emprunt.belongsTo(db.client);

    // un emprunt a un seul livre
        db.livre.hasMany(db.emprunt);
        db.emprunt.belongsTo(db.livre);

module.exports = db

