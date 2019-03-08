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

/** 获取借条缓存 */
router.post('/v2/getIOUCacheV2', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/getIOUCacheV2Resp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取借条评论缓存 */
router.post('/v1/getIOUCommentCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/getIOUCommentCacheResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 创建吕约借条草稿缓存 */
router.post('/v2/moneyV2/createIOUMoneyDraft', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/createIOUMoneyDraftResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 更新吕约借条草稿缓存 */
router.post('/v2/moneyV2/updateIOUMoneyDraft', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/updateIOUMoneyDraftResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 使吕约借条进入待确认状态 */
router.post('/v2/moneyV2/inner/confirm', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/moneyV2ConfirmResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 吕约借条意向筹备4/5 H5页面调用的接口 */
router.get('/v2/moneyV2/inner/deleteToInclude', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/deleteToIncludeResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 吕约借条意向筹备4/5 H5页面调用的接口 */
router.get('/v2/moneyV2/inner/waitConfirmInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/cache/waitConfirmInfoResp.json');
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
