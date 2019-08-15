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

/** 获取用户绑定的银行卡信息 */
router.get('/verify/v1/selectVerifyInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/selectVerifyInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取广告 */
router.get('/iou/v1/ad/getByPosition', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/getByPositionResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取签章套餐列表 */
router.post('/iou/package/v2/packageList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/packageListResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 绑定银行卡 */
router.post('/welfare/v1/bindBankCardInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/bindBankCardInfoRespcle.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 校验银行卡四要素 */
router.post('/welfare/v1/checkFourElementVerify', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/checkFourElementVerifyRespcle.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取次卡充值消费历史记录 */
router.get('/iou/v1/getHistory', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/getHistoryResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})


/** 获取签章套餐列表 */
router.get('/iou/package/v1/searchPackageList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/searchPackageListResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户是否有吕约收条贵宾卡 */
router.get('/iou/signOrder/v1/getVipCardUseInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/getVipCardUserInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户是否有吕约收条贵宾卡 */
router.post('/iou/package/v1/sign/getTimeLimitVipPackages', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/pay/getTimeLimitVipPackagesResp.json');
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
