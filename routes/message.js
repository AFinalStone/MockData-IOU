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

/** 获取条管家消息中心未读消息 */
router.get('/messageCenter/v2/unReadMessages', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getUnReadMsgNumResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取条管家消息列表 */
router.get('/messageCenter/v2/getButlerMsgCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getButlerMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取合同消息列表 */
router.get('/messageCenter/v2/getContractMsgCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getContractMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取待还提醒消息列表 */
router.get('/messageCenter/v2/getWaitRepayMsgCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getWaitRepayMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取疑似合同列表 */
router.post('/messageCenter/v2/getSimilarContractMsgCach', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getSimilarContractMessageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取支付宝回单合同列表 */
router.post('/messageCenter/v2/getReceiptMsgCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getAliPayMessageListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 获取支付宝回单详情 */
router.post('/messageCenter/v2/getAliPayReceiptInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getAliPayMessageDetailResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 把消息设置为已读 */
router.post('/messageCenter/v2/readSingle', function (req, res, next) {
    var data = 0;
    var resp = new BaseResponse(data);
    res.json(resp)
})

/** 把某类消息批量设置为已读 */
router.post('/messageCenter/v2/readBatch', function (req, res, next) {
    var data = 0;
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

/** 获取新的好友页面列表 */
router.post('/messageCenter/v1/getApplyNewFriendList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getApplyNewFriendListResp.json');
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
