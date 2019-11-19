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

/** 获取律师认证首页的状态 */
router.get('/v1/lawyer/auth/process', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/GetProcessResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师首页详情 */
router.get('/v1/lawyer/detail', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerHomeDetailResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取律师工作台信息 */
router.get('/v1/lawyer/workbench', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/WorkBeanchResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取律师订单列表 */
router.post('/v1/lawyerBill', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerBillResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师工作台律师函订单列表 */
router.post('/v1/letter/lawyerLetterWaitList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerLetterWaitListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师工作台邀请接单订单列表 */
router.post('/v1/letter/lawyerInviteWaitList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/lawyerInviteWaitListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师函订单详情 **/
router.post('/v1/letter/lawyerLetterDetail', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/lawyerLetterDetailResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 校验能够接单 */
router.get('/v1/letter/canAcceptBill', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/CanAcceptBillResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师接单 */
router.get('/v1/letter/lawyerAcceptBill', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerAcceptBillResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师取消订单 */
router.get('/v1/letter/lawyerCancelBill', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerCancelBillResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师拒绝订单 */
router.get('/v1/letter/lawyerRefuseBill', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerRefuseBillResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** email类型 */
router.get('/v1/express/list', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/listResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 律师完成订单 */
router.post('/v1/letter/lawyerFinishLetter', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/LawyerFinishLetterResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 年检信息 */
router.post('/v1/lawyer/auth/update', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/YearCheckUpdateResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 更新用户信息 */
router.post('/v1/lawyer/service/price/update', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/UpdateLawyerDetailResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 钱包 */
router.post('/v1/wallet', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/getWalletResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 计算费率 */
router.post('/v1/fee/calc', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/calcResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 提现 */
router.post('/v1/withdraw', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/lawyer/withDrawResp.json');
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
