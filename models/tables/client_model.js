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
            type: DataTypes.DATE,
            allowNull: false
        },
        code_postal: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return client
}

module.exports = clientModel