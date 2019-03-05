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


/** 获取首页系统公告 */
router.get('/v1/selectNotice', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/notice/selectNoticeResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

function BaseResponse(object) {
    this.retCode = 0;
    this.retMsg = "请求结果成功";
    this.data = object;
}

module.exports = router;
