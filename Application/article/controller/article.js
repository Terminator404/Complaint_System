/**
 * Created by Terminator on 2016/3/1 0001.
 */
/** Created by mkoa */
module.exports = function ($this) {
    var main = {};

    main['_init'] = function *() {/*先执行的公共函数 （不会被缓存部分） */
    };
    main['_after'] = function *() {/*最后执行的公共函数*/
    };


    /*增加或者修改*/
    main['add'] = function *() {
        /*验证规则*/
        var rules = {
            f_title: {rule:'required',error:'验证失败1!'},
            f_source: {rule:'required',error:'验证失败2!'},
            f_content: {rule:'required',error:'验证失败3!'}
            };

        var check = $F.V.validate($this.POST, rules);//验证数据

        if (check.status) {/*通过验证*/
            var where = {id: $this.POST['id'] ? parseInt($this.POST['id']) : 0};
            var res,resData;
            if (where.id) {/*存在数据ID更新改数据*/
                res = yield $D('article').update($this.POST, {where: where});
                resData = $this.POST;
            } else {/*新增*/
                res = yield $D('article').build($this.POST).save();
                resData = res;
            }
            $this.success(resData);
        } else {
            $this.error(rules[check.rejects[0].field].error);//数据验证有误
        }
    };

    main['add2'] = function *() {
        /*验证规则*/
        var rules = {
            s_title: {rule:'required',error:'验证失败1!'},
            s_source: {rule:'required',error:'验证失败2!'},
            s_content: {rule:'required',error:'验证失败3!'}
        };

        var check = $F.V.validate($this.POST, rules);//验证数据

        if (check.status) {/*通过验证*/
            var where = {id: $this.POST['id'] ? parseInt($this.POST['id']) : 0};
            var res,resData;
            if (where.id) {/*存在数据ID更新改数据*/
                res = yield $D('article').update($this.POST, {where: where});
                resData = $this.POST;
            } else {/*新增*/
                res = yield $D('article').build($this.POST).save();
                resData = res;
            }
            $this.success(resData);
        } else {
            $this.error(rules[check.rejects[0].field].error);//数据验证有误
        }
    };

    main['update'] = function *() {
        /*验证规则*/
        $this.POST['id']=1;
        var rules = {
            f_title: {rule:'required',error:'验证失败1!'},
            f_source: {rule:'required',error:'验证失败2!'},
            f_content: {rule:'required',error:'验证失败3!'}
        };
        var check = $F.V.validate($this.POST, rules);//验证数据
        if (check.status) {/*通过验证*/
            var where = {id: $this.POST['id'] ? parseInt($this.POST['id']) : 0};
            var res,resData;
            res = yield $D('article').update($this.POST,{where: where});

            resData = $this.POST;
            $this.success(resData);
        }
        else {
            $this.error(rules[check.rejects[0].field].error);//数据验证有误
        }
    };

    //返回数据
    main['findOne'] = function *() {
        var where = {
            id: parseInt($this.GET['id'])

        };
        var res = yield $D('article').findOne({where: where}, {raw: true});
        $this.success(res);
    };

    //返回头条新闻
    main['findFirst'] = function *() {
        var perPages=$this.GET['perPages']?parseInt($this.GET['perPages']):1;//每页数据数
        var currentPage=$this.GET['currentPage']?parseInt($this.GET['currentPage']):1;//查询页码
        var where = { };
        var res = yield $D('article').findAndCountAll({
            where: where,
            limit: perPages,
            offset: perPages * (currentPage - 1)
        }, {raw: true});
        if (res)$this.success(res);
    };


    //返回分页数据
    main['findAll'] = function *() {
        var perPages=$this.GET['perPages']?parseInt($this.GET['perPages']):10000000;//每页数据数
        var currentPage=$this.GET['currentPage']?parseInt($this.GET['currentPage']):1;//查询页码
        var where = {};
        var res = yield $D('article').findAndCountAll({
            where: where,
            limit: perPages,
            offset: perPages * (currentPage - 1)
        }, {raw: true});
        if (res)$this.success(res);
    };


    //返回搜索数据
    main['search'] = function *() {
        var perPages=$this.GET['perPages']?parseInt($this.GET['perPages']):10;//每页数据数
        var currentPage=$this.GET['currentPage']?parseInt($this.GET['currentPage']):1;//查询页码
        var where = {};
        if(!isNaN($this.GET['searchValue'])){
            where[$this.GET['searchKey']]=$this.GET['searchValue'];
        }else{
            where[$this.GET['searchKey']]={
                $like:'%'+$this.GET['searchValue']+'%'
            };
        }
        var res = yield $D('article').findAndCountAll({
            where: where,
            limit: perPages,
            offset: perPages * (currentPage - 1)
        }, {raw: true});
        if (res)$this.success(res);
    };

    //删除数据
    main['delete'] = function *() {
        var where = {
            id: parseInt($this.GET['id'])
        };
        if (where.id)yield $D('article').destroy({where: where});
        $this.success();
    };

    return main;
};