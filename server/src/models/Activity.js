const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4,35]
            }
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1, // Valor mínimo permitido
                max: 5, // Valor máximo permitido
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autum', 'Winter', 'Spring'),
            allowNull: false
        }
    },
    { 
        timestamps: false 
    });
}
