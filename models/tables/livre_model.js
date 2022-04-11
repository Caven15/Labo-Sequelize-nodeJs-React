const livreModel = (Sequelize, DataTypes) => {
    const livre = Sequelize.define("livre", {
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        langue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        annee: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        nbr_page: {
            type: DataTypes.INT,
            allowNull: false
        }
    })
    return livre
}

module.exports = livreModel