# MockData-IOU

### 启动项目

$ DEBUG=myapp:* npm start

###登陆模块

1、获取当前允许的登陆方式，手机登录和微信登陆的入口可以通过此接口进行控制：

/api/iou/user/v1/recordAndControl

2、登陆接口：<POST方式>

/api/iou/user/v1/mobileLogin


###消息中心

1、获取消息列表：<GET方式>

/api/message/messageCenter/v1/getMessages


### 吕约借条

1、创建吕约借条草稿

/api/iou/front/v2/moneyV2/createIOUMoneyDraft
