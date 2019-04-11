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

/** 获取条管家消息列表 */
router.post('/messageCenter/v1/getMessages', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取合同消息列表 */
router.post('/messageCenter/v1/getContractMsgList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getContractMsgListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取待还提醒消息列表 */
router.post('/messageCenter/v1/getRemindBackList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getRemindBackListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取疑似合同列表 */
router.post('/messageCenter/v1/getSimilarityContractList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getSimilarityContractListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取通讯录 */
router.post('/messageCenter/v1/getFriendList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getFriendListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

function BaseResponse(object) {
    this.retCode = 0;
    this.retMsg = "请求结果成功";
    this.data = object;
}

module.exports = router;
