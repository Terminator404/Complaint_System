/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('complain',{
                c_name: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉人id'
                      },
                c_sexual: {
                        type: DataTypes.STRING(2),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉人性别'
                      },
                c_phone: {
                        type: DataTypes.CHAR(15),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉人电话'
                      },
                c_mail: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉人邮箱'
                      },
                c_title: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉主题'
                      },
                c_content: {
                        type: DataTypes.TEXT,
                        allowNull:false,
                        unique:false,
                        comment: '投诉内容'
                      },
                de_id: {
                        type: DataTypes.CHAR(30),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉科室id'
                      },
                d_id: {
                        type: DataTypes.STRING(255),
                        allowNull:true,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉医生id'
                      },
                c_condition: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉状态'
                      },
                c_query: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉查询码'
                      }}, {
        tableName:'mkoa_complain',
        comment: '投诉表',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};