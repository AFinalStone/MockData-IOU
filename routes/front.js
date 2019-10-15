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

/** 上传图片并添加云存储空间 */
router.post('/v1/uploadPic/countSize', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/countSizeResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 创建纸质借条 */
router.post('/v1/paperBorrow/create', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/createPaperBorrowResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 创建房贷合同 */
router.post('/v1/fdContract/create', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/createFdContractResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 创建纸质收条 */
router.post('/v1/paperRecv/create', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/createPaperReceiveResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 删除电子凭证 */
router.get('/v1/exEvidence/del', function (req, res, next) {
    var data = 0;
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 重命名电子凭证 */
router.post('/v1/exEvidence/rename', function (req, res, next) {
    var data = 0;
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 分享电子凭证 */
router.post('/v2/iouAndExtShare', function (req, res, next) {
    var data = "https://www.baidu.com";
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取分享的电子凭证详情 */
router.get('/v2/getShareInfo', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getShareInfoResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取借条宽展信息详情 */
router.get('/v1/exContract/getDetails', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getElecExDetailResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取获取吕约借条的额外信息详情 */
router.get('/v1/exDetails', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/exDetailsResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取凭证详情 */
router.get('/v1/exEvidence/check', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/exDetailsCheckResp.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 批量收录疑似合同 */
router.post('/v2/moneyV2/includeBatch', function (req, res, next) {
    var data = 0;
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取借条缓存 */
router.post('/v3/getIOUCacheV3', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getIOUCacheV3.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取借条评论缓存 */
router.post('/v1/getIOUCommentCache', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getIOUCommentCache.json');
    var json = fs.readFileSync(file, 'utf-8')
    var data = JSON.parse(json);
    var resopnse = new BaseResponse(data);
    res.json(resopnse)
})

/** 获取隐藏的合同列表 */
router.get('/v1/iou/getHideIOU', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getHideIOUResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取债务人历史列表 */
router.get('/v1/getLoanerHistory', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getLoanerHistoryResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 删除债务人历史列表条目 */
router.get('/v1/owe/delDebtorHistory', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/delDebtorHistoryResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取债务人邮箱历史列表 */
router.get('/v1/owe/otherSideEmail', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/otherSideEmailResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取欠条相关凭证类型列表 */
router.get('/v1/owe/cert/type/list', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getQianTiaoAboutEvidenceTypeListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var userModule = JSON.parse(json);
    var baseResopnse = new BaseResponse(userModule);
    res.json(baseResopnse)
})

/** 获取纠纷仲裁机构列表 */
router.get('/v1/owe/dispute/manage/list', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/front/getDisputeOriginationListResp.json');
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
