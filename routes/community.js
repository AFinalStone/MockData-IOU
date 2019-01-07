var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

/* 我的调解列表. */
router.get('/mylist', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/community/mylistResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/* 我的调解列表. */
router.get('/history', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/community/hitorylistResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/* 我的会话列表. */
router.get('/chatlist', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/community/chatlistResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});


function BaseResponse(object) {
    this.retCode = 0;
    this.retMsg = "请求结果成功";
    this.data = object;
}

module.exports = router;
