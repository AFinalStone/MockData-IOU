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

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/** 获取短信验证码 */
router.post('/msg/v1/sendMessage', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/base/sendMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取语音验证码 */
router.post('/msg/v1/sendCodeVoice', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/base/sendMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})


function BaseResponse(object) {
    this.retCode = 0;
    this.retMsg = "请求结果成功";
    this.data = object;
}

module.exports = router;
