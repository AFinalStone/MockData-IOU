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

/** 获取仲裁通的有效凭证列表 */
router.post('/v1/getRemittanceReceipt', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getRemittanceReceiptResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取仲裁的状况 */
router.post('/v1/getArbPageIndex', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getArbPageIndexResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取仲裁申请的状况 */
router.post('/v1/checkArbApply', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/checkArbApplyResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取提交仲裁申请书的预加载信息 */
router.post('/v1/getArbMoneyData', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getArbMoneyDataResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 计算仲裁金额和仲裁费用 */
router.post('/v1/getArbCost', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getArbCostResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})
/** 获取催收证明描述列表 */
router.post('/v1/getUrgeEvidenceState', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getUrgeEvidenceStateResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取仲裁服务协议 */
router.post('/v1/getArbProtocol', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getArbProtocolResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 创建仲裁合同申请订单 */
router.post('/v1/order/createHmOrder', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/createHmOrderResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 创建仲裁申请订单 */
router.post('/v1/order/createApplyOrder', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/createApplyOrderResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取仲裁合同申请订单详情 */
router.post('/v1/order/getHmPackage', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getHmPackageResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取已经生成的仲裁申请书内容 */
router.get('/v1/getArbApplyDoc', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/arb/getArbApplyDocResp.json');
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
