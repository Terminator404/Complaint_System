
module.exports=function(root){
    return {
        v:'1.0',//版本
        //数据库连接
        sqlType:1,//ORM框架数据库 1 mysql  2 pgsql
        sessionType:3,//1pgsql  2memcached 3 mysql 4 redis
        mysql:{
            username:'root'
            ,password:'mysql194124'
            ,dbName:'complaint_system'
            ,prefix:'mkoa_'
            ,host:'localhost'
        },
        //sqlType:2,//ORM框架数据库 1 mysql  2 pgsql
        //sessionType:1,//1pgsql  2memcached 3 mysql 4 redis
        //pgsql:{
        //     username:'postgres'
        //    ,password:'root'
        //    ,dbName:'Mkoa'
        //    ,prefix:'mkoa_'
        //    ,host:'localhost'
        //    ,port:5432
        //},
        //memcached:{
        //     host:'x'
        //    ,port:'11211'
        //    ,username:'x'
        //    ,password:'x'
        //},
        //redis:{
        //    host:'127.0.0.1',
        //    port:6379,
        //    socket:'',
        //    db:'',
        //    pass:'e6c925a8eeb04856:ADmegic2015'
        //},
        //系统目录
        fileType:['gif','jpg','png'],//允许上传文件的类型
        maxFieldsSize:1*1024*1024,//最大上传文件
        formLimit:'1mb',//post最大长度
        host:'http://localhost:3000/',//访问域名
        csrf:false,//是否开启csrf验证
        openSocket:true,//是否开启socket.io
        socketConfig:root + '/config/socket',//socket配置文件
        openRewrite:true,
        port:3000,    //端口设置
        logger:true,   //输出调试内容
        loggerType:2,//1：console 2file
        //执行默认模块
        defaultPath:"login.html"//默认访问路径
    }

};