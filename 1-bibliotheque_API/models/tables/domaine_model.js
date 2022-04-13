const domaineModel = (Sequelize, DataTypes) => {
    const domaine = Sequelize.define("domaine", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        libelle: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return domaine
}

module.exports = domaineModel