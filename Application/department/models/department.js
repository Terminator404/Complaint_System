/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('department',{
                de_id: {
                        type: DataTypes.CHAR(30),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '科室id'
                      },
                de_name: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '科室名'
                      }}, {
        tableName:'mkoa_department',
        comment: '科室',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};