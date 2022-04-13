const empruntModel = (Sequelize, DataTypes) => {
    const emprunt = Sequelize.define("emprunt", {
        date_debut: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_fin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return emprunt
}

module.exports = empruntModel