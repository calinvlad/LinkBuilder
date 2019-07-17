'use strict';
module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define('Link', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            field: 'name'
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'link'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Link.associate = function(models) {
    };
    return Link;
};