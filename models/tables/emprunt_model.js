const empruntModel = (Sequelize, DataTypes) => {
    const emprunt = Sequelize.define("emprunt", {
        date_debut: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        date_fin: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        statut: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    })
    return emprunt
}

module.exports = empruntModel