
const auteurModel = (Sequelize, DataTypes) => {
    const auteur = Sequelize.define("auteur", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_naissance: {
            type: DataTypes.DATETIME,
            allowNull: false
        }
    })
    return auteur
}

module.exports = auteurModel