/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('doctor',{
                d_id: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '医生id'
                      },
                d_name: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '医生姓名'
                      },
                de_id: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '所属科室'
                      },
                d_user: {
                        type: DataTypes.INTEGER(20),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '医生账号'
                      },
                d_pass: {
                        type: DataTypes.CHAR(30),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '医生密码'
                      },
                d_content: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '反馈意见'
                      }}, {
        tableName:'mkoa_doctor',
        comment: '医务',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};