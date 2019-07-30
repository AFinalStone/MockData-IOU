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

/* 获取好友黑名单列表 */
router.get('/friend/v1/getBlackFriend', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getBlackFriendResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/* 获取被别人添加为好友的方式 */
router.get('/friend/v1/getApplyMeRelatedSetting', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getApplyMeRelatedSettingResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/**修改别人添加自己为好友的方式**/
router.post('/friend/v1/updateApplyMeRelatedSetting', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/updateApplyMeRelatedSettingResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/**IM会话前进行好友状态校验**/
router.get('/friend/v1/checkForIMChat', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/checkForIMChatResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/**获取好友通讯录**/
router.post('/friend/v1/getMailList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getMailListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/**刷新IMToken**/
router.get('/friend/v1/getOrRefreshToken', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getOrRefreshTokenResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});
/**获取好友资料信息**/
router.post('/friend/v2/getUserInfoById', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getUserInfoByIdResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});

/**获取等待确认的好友申请列表**/
router.post('/friend/v2/getApplyRecordList', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/getApplyRecordListResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});
/**获取等待确认的好友申请列表**/
router.get('/friend/v1/delApplyRecord', function (req, res, next) {
    var file = path.join(__dirname, '../', '/data/news/delApplyRecordResp.json');
    var json = fs.readFileSync(file, 'utf-8')

    var data = JSON.parse(json);
    var resp = new BaseResponse(data);
    res.json(resp)
});


function BaseResponse(object) {
    this.retCode = 0;
    this.retMsg = "请求结果成功";
    this.data = object;
}

module.exports = router;
