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

/** 控制登陆入口 */
router.get('/v1/recordAndControl', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/recordAndControlResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})


/** 检查版本更新 */
router.get('/v1/checkVersion', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkVersionResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 判断手机号是否已经注册 */
router.get('/v1/isAccountExist', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/isAccountExistResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 登陆 */
router.post('/v1/mobileLogin', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileLoginResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 用户中心 */
router.get('/v1/userCenter', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/userCenterResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取首页弹窗 */
router.get('/v1/selectAlertShowByType', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/selectAlertShowByTypeResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取记债本模块是否打开过 */
router.get('/v1/getFirstDebtStatus', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getFirstDebtStatusResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 是否实名认证过 */
router.get('/v1/checkRealNameAuth', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkRealNameAuthResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 校验签约密码 */
router.get('/v1/checkTransPswd', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkSignPsdResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取签章列表 */
router.get('/v2/selectCustomerSealList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/selectCustomerSealListResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 判断用户是否实名认证 */
router.get('/v2/canRealNameAuth', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/canRealNameAuthResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 埋点统计即将实名认证的用户是上班族还是学生 */
router.get('/v1/setCareerType', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/setCareerTypeResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户的实名信息详情 */
router.get('/v1/getRealNameInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getRealNameInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 修改支付宝账号 */
router.get('/v1/updateAliPay', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateAliPayResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
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
