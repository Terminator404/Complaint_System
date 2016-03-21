/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('article',{
                f_title: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '头条标题'
                      },
                f_source: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '头条来源'
                      },
                f_content: {
                        type: DataTypes.TEXT,
                        allowNull:true,
                        unique:false,
                        comment: '头条内容'
                      },
                s_title: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '新闻标题'
                      },
                s_source: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '新闻来源'
                      },
                s_content: {
                        type: DataTypes.TEXT,
                        allowNull:false,
                        unique:false,
                        comment: '新闻内容'
                      },
                l_title: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '法律标题'
                      },
                l_source: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '法律来源'
                      },
                w_name: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉部门'
                      },
                w_phone: {
                        type: DataTypes.STRING,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '投诉电话'
                      }}, {
        tableName:'mkoa_article',
        comment: '新闻法规电话',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};