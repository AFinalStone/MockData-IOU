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

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})


/** 检查版本更新 */
router.get('/v1/checkVersion', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkVersionResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 判断手机号是否已经注册 */
router.get('/v1/isAccountExist', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/isAccountExistResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 判断微信是否已经绑定过手机号了 */
router.get('/v1/isWXExist', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/isWXExistResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 判断微信是否已经绑定过手机号了 */
router.get('/v1/wxLogin', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileLoginResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 判断手机号是否已经注册 */
router.get('/v1/isBindWX', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/isBindWXResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 登陆 */
router.post('/v1/mobileLogin', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileLoginResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 用户中心 */
router.get('/v1/userCenter', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/userCenterResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取首页弹窗 */
router.get('/v1/selectAlertShowByType', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/selectAlertShowByTypeResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取记债本模块是否打开过 */
router.get('/v1/getFirstDebtStatus', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getFirstDebtStatusResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 是否实名认证过 */
router.get('/v1/checkRealNameAuth', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkRealNameAuthResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 校验签约密码 */
router.get('/v1/checkTransPswd', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/checkSignPsdResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取签章列表 */
router.get('/v2/selectCustomerSealList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/selectCustomerSealListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 判断用户是否实名认证 */
router.get('/v2/canRealNameAuth', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/canRealNameAuthResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 埋点统计即将实名认证的用户是上班族还是学生 */
router.get('/v1/setCareerType', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/setCareerTypeResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户的实名信息详情 */
router.get('/v1/getRealNameInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getRealNameInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 修改支付宝账号 */
router.get('/v1/addOrUpdateAliPay', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateAliPayResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取个人中心基本展示的用户信息 */
router.get('/v1/getPersonalCenter', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getPersonalCenterResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户绑定的银行卡的基本信息 */
router.get('/v1/getBankCardInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getBankCardInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户绑定的邮箱的基本信息 */
router.get('/v1/getMailboxInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getMailboxInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取不赞同原因列表 */
router.get('/v1/getNoAgreeReasonList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getNoAgreeReasonListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 提交不赞同的原因 */
router.get('/v1/submitNoAgreeReason', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/submitNoAgreeReasonResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 永久注销 */
router.post('/v1/foreverUnRegister', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/foreverUnRegisterResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取永久注销的验证码 */
router.get('/v1/getCheckCodeForUnRegister', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getCheckCodeForUnRegisterResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 身份证正面识别 */
router.get('/v1/ocrIdcardFront', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/ocrIdcardFrontResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 身份证反面识别 */
router.get('/v1/ocrIdcardBack', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/ocrIdcardFrontResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 确认提交身份证正反面OCR信息 */
router.post('/v1/confirmOcrIdcardInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/confirmOcrIdcardInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})
/** 公安对比，确认用户实名认证信息是否真实 */
router.post('/v2/livenessIdnumberVerification', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/livenessIdnumberVerificationResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})
/** 上传活体校验视频 */
router.post('/v1/savePrivacyFileNew', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/savePrivacyFileNewResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户黑名单和隐藏的合同数量 */
router.get('/v1/getHideIOUAndOther', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getHideIOUAndOtherResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取用户的会员信息 */
router.get('/v1/getMemberInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getMemberInfoResp.json');
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
