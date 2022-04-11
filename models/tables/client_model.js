const clientModel = (Sequelize, DataTypes) => {
    const client = Sequelize.define("client", {
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
        },
        code_postal: {
            type: DataTypes.INT,
            allowNull: false
        }
    })
    return client
}

module.exports = clientModel