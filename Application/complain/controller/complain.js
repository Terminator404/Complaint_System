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
            c_name: {rule:'required',error:'验证失败!1'},
            c_sexual: {rule:'required',error:'验证失败!2'},
            c_phone: {rule:'required',error:'验证失败!3'},
            c_mail: {rule:'required',error:'验证失败!4'},
            c_title: {rule:'required',error:'验证失败!5'},
            c_content: {rule:'required',error:'验证失败!6'},
            de_id: {rule:'required',error:'验证失败!7'},
            d_id: {rule:'required',error:'验证失败!8'},
            //c_time: {rule:'required',error:'验证失败!'},
            c_condition: {rule:'required',error:'验证失败!9'},
            c_query: {rule:'required',error:'验证失败!10'}};

        var check = $F.V.validate($this.POST, rules);//验证数据

        if (check.status) {/*通过验证*/
            var where = {id: $this.POST['id'] ? parseInt($this.POST['id']) : 0};
            var res,resData;
            if (where.id) {/*存在数据ID更新改数据*/
                res = yield $D('complain').update($this.POST, {where: where});
                resData = $this.POST;
            } else {/*新增*/
                res = yield $D('complain').build($this.POST).save();
                resData = res;
            }
            $this.success(resData);
        } else {
            $this.error(rules[check.rejects[0].field].error);//数据验证有误
        }
    };


    //更新投诉状态
    main['update'] = function *() {
        /*验证规则*/
        var rules = {
            c_condition: {rule: 'required', error: '验证失败!9'}
        };
        var check = $F.V.validate($this.POST, rules);//验证数据

        if (check.status) {/*通过验证*/
            var where = {id: $this.POST['id'] ? parseInt($this.POST['id']) : 0};
            var res,resData;
            if (where.id) {/*存在数据ID更新改数据*/
                res = yield $D('complain').update($this.POST, {where: where});
                resData = $this.POST;
            } else {/*新增*/
                res = yield $D('complain').build($this.POST).save();
                resData = res;
            }
            $this.success(resData);
        } else {
            $this.error(rules[check.rejects[0].field].error);//数据验证有误
        }
    };



    //返回数据
    main['findOne'] = function *() {
        var where = {
            id: parseInt($this.GET['id'])
        };
        var res = yield $D('complain').findOne({where: where}, {raw: true});
        $this.success(res);
    };


    //返回分页数据
    main['findAll'] = function *() {
        var perPages=$this.GET['perPages']?parseInt($this.GET['perPages']):20;//每页数据数
        var currentPage=$this.GET['currentPage']?parseInt($this.GET['currentPage']):1;//查询页码
        var where = {};
        var res = yield $D('complain').findAndCountAll({
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
        var res = yield $D('complain').findAndCountAll({
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
        if (where.id)yield $D('complain').destroy({where: where});
        $this.success();
    };

    return main;
};