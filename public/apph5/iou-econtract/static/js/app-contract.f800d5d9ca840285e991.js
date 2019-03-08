webpackJsonp([4], {
    "6huz": function(e, t, i) {
        "use strict";
        var a = i("3cXf"),
            o = i.n(a),
            n = i("aozt"),
            s = (i.n(n), navigator.userAgent),
            r = s.indexOf("HMAndroidWebView") > -1,
            c = s.indexOf("HMiOSUIWebView") > -1,
            u = s.indexOf("HMiOSWKWebView") > -1,
            l = "";
        u && (l = window.webkit.messageHandlers), t.a = {
            shareLink: function(e, t, i, a) {
                var n = window.HMApplication;
                if (r) n.shareLink(e, t, i, a);
                else if (c) n.shareLink(e, t, i, a);
                else if (u) {
                    var s = o()({
                        param: {
                            title: e,
                            desc: t,
                            url: i,
                            channels: a
                        },


                        function: ""
                    });
                    l.shareLink.postMessage(s)
                }
            },
            getUserInfo: function(e) {
                var t = window.HMApplication;
                if (r) e(t.getUserInfo());
                else if (c) e(t.getUserInfo());
                else if (u) {
                    var i = o()({
                        param: "",


                        function: e.name
                    });
                    l.getUserInfo.postMessage(i)
                }
            },
            toast: function(e) {
                var t = window.HMApplication;
                if (r) t.toast(e);
                else if (c) t.toast(e);
                else if (u) {
                    var i = o()({
                        param: {
                            images: e
                        },


                        function: ""
                    });
                    l.toast.postMessage(i)
                }
            },
            navigateByRouter: function(e) {
                var t = window.HMApplication;
                if (r) t.navigateByRouter(e);
                else if (c) t.navigateByRouter(e);
                else if (u) {
                    var i = o()({
                        param: {
                            routerUrl: e
                        },


                        function: ""
                    });
                    l.navigateByRouter.postMessage(i)
                }
            },
            closeWebView: function() {
                var e = window.HMApplication;
                if (r) e.closeWebView();
                else if (c) e.closeWebView();
                else if (u) {
                    var t = o()({
                        param: "",


                        function: ""
                    });
                    l.closeWebView.postMessage(t)
                }
            },
            savePicture: function(e) {
                var t = window.HMApplication;
                if (r) t.savePicture(e);
                else if (c) t.savePicture(e);
                else if (u) {
                    var i = o()({
                        param: {
                            imgUrl: e
                        },


                        function: ""
                    });
                    l.savePicture.postMessage(i)
                }
            },
            shareImage: function(e, t) {
                var i = window.HMApplication;
                if (r) i.shareImage(e, t);
                else if (c) i.shareImage(e, t);
                else if (u) {
                    var a = o()({
                        param: {
                            imgUrl: e,
                            channels: t
                        },


                        function: ""
                    });
                    l.shareImage.postMessage(a)
                }
            },
            shareImageV2: function(e, t, i, a) {
                var n = window.HMApplication;
                if (r) n.shareImageV2(e, t, i, a);
                else if (c) n.shareImageV2(e, t, i, a);
                else if (u) {
                    var s = o()({
                        param: {
                            imgUrl: e,
                            channels: t,
                            type: i,
                            shareTitle: a
                        },


                        function: ""
                    });
                    l.shareImageV2.postMessage(s)
                }
            },
            toAppHomePage: function(e) {
                var t = window.HMApplication;
                if (r) t.navigateByRouter(e);
                else if (c) t.toHomePage();
                else if (u) {
                    var i = o()({
                        param: {
                            params: ""
                        },


                        function: functionName
                    });
                    l.toHomePage.postMessage(i)
                }
            },
            getTileHeight: function() {
                var e = window.HMApplication;
                return r ? e.getStatusBarHeight() : c ? e.getStatusBarHeight() : u ? l.getStatusBarHeight.postMessage() : 0
            },
            checkLogin: function(e) {
                var t = window.HMApplication;
                if (r) e(t.checkLogin());
                else if (c) e(t.checkLogin());
                else if (u) {
                    var i = o()({
                        param: "",


                        function: e.name
                    });
                    l.checkLogin.postMessage(i)
                }
            },
            toUserLoginPage: function() {
                var e = window.HMApplication;
                if (r) e.toUserLoginPage();
                else if (c) e.toUserLoginPage();
                else if (u) {
                    var t = o()({
                        param: "",


                        function: ""
                    });
                    l.toUserLoginPage.postMessage(t)
                }
            },
            shareImageByBase64: function(e, t) {
                var i = window.HMApplication;
                if (r) i.shareImageByBase64(e, t);
                else if (c) i.shareImageByBase64(e, t);
                else if (u) {
                    var a = o()({
                        param: {
                            imgBase64Str: e,
                            channels: t
                        },


                        function: ""
                    });
                    l.shareImageByBase64.postMessage(a)
                }
            },
            toHomePage: function(e) {
                window.HMApplication.toHomePage(e)
            },
            setNavigationBarRightMenu: function(e, t, i) {
                var a = window.HMApplication;
                r ? a.setNavigationBarRightMenu(e, t, i) : c ? a.setNavigationBarRightMenu(e, t, i) : (i = o()({
                    param: {
                        btnText: e,
                        functionName: t,
                        params: i
                    },


                    function: ""
                }), l.setNavigationBarRightMenu.postMessage(i))
            },
            openUrlThroughWebView: function(e) {
                var t = window.HMApplication;
                if (r) t.openUrlThroughWebView(e);
                else if (c) t.openUrlThroughWebView(e);
                else if (u) {
                    var i = o()({
                        param: {
                            url: e
                        },


                        function: ""
                    });
                    l.openUrlThroughWebView.postMessage(i)
                }
            },
            selectCity: function(e) {
                var t = window.HMApplication;
                if (r) t.selectCity(e);
                else if (c) t.selectCity(e);
                else if (u) {
                    var i = o()({
                        param: {
                            params: ""
                        },


                        function: e
                    });
                    l.selectCity.postMessage(i)
                }
            },
            getHeaders: function(e) {
                var t = window.HMApplication;
                if (r) e(t.getHeaders());
                else if (c) e(t.getHeaders());
                else if (u) {
                    var i = o()({
                        param: "",


                        function: e.name
                    });
                    l.getHeaders.postMessage(i)
                }
            },
            saveImageBase64: function(e) {
                var t = window.HMApplication;
                if (r) t.saveImageWithBase64(e);
                else if (c) t.saveImageWithBase64(e);
                else if (u) {
                    var i = o()({
                        param: {
                            imgBase64Str: e
                        },


                        function: ""
                    });
                    l.saveImageWithBase64.postMessage(i)
                }
            },
            notifyEvent: function(e) {
                var t = window.HMApplication;
                if (r) t.notifyEvent(e);
                else if (c) t.notifyEvent(e);
                else if (u) {
                    var i = o()({
                        param: {
                            praram: e
                        },


                        function: ""
                    });
                    l.notifyEvent.postMessage(i)
                }
            }
        }
    },
    CHJC: function(e, t, i) {
        "use strict";
        var a = "",
            o = window.location.href;
        a = o.indexOf("re.54jietiao") > -1 ? "http://re.54jietiao.com/apph5/iou-econtract/" : o.indexOf("h5.54jietiao") > -1 ? "https://h5.54jietiao.com/apph5/iou-econtract/" : "http://192.168.1.217/apph5/iou-econtract/", t.a = {
            name: "config",
            imgTopLink: "http://iou-steward.oss-cn-hangzhou.aliyuncs.com/",
            hrefUrl: a,
            iouDegital: {
                iouId: "",
                justiceId: "",
                signatoryName: "",
                mobileSuf: "",
                remainTime: 0
            }
        }
    },
    EoZV: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAJFBMVEVHcEzQ0NfPz9fQ0NfR0dnPz9bPz9fQ0NfPz9XExNjQ0NfPz9btLpZpAAAAC3RSTlMA5kGPHsVc+bEN2GFl+AQAAACcSURBVBjTY2AAAiZT8cJgBQYoYFu9Gwh2JUB4LNEbjRxYlKW3OoC5ihvB4mzSQmCN1Z0QVTO2g7Q7boaZYS0CJKIbYFyOrUAtGyfAuJzSCQxc2xjgIHsBg7YAgsu4icHaAMFl3swQrYDgMm1lkHZAcFk2MlQzIIHtKFzO7eiK0YxCswjNGWiORPMCmgfRvY8WOGhBhx6waMGOHCkAEvUw6ttRa4cAAAAASUVORK5CYII="
    },
    HSl9: function(e, t) {},
    JaHG: function(e, t, i) {
        "use strict";
        t.a = {
            getQuery: function(e) {
                var t, i = location.href,
                    a = i.substring(i.indexOf("?") + 1, i.length).split("&"),
                    o = {}, n = 0;
                for (t = 0; n = a[t]; t++) o[n.substring(0, n.indexOf("=")).toLowerCase()] = n.substring(n.indexOf("=") + 1, n.length);
                var s = o[e.toLowerCase()];
                return void 0 === s ? "" : decodeURI(s)
            },
            checkApp: function() {
                var e = navigator.userAgent,
                    t = e.indexOf("HMAndroidWebView") > -1,
                    i = e.indexOf("HMiOSUIWebView") > -1,
                    a = e.indexOf("HMiOSWKWebView") > -1;
                return !!(t || i || a)
            },
            checkIOSType: function() {
                return navigator.userAgent.indexOf("iphoneType:2") > -1
            },
            checkIos: function() {
                var e = navigator.userAgent,
                    t = e.indexOf("HMiOSUIWebView") > -1,
                    i = e.indexOf("HMiOSWKWebView") > -1;
                return !(!t && !i)
            },
            testPhone: function(e) {
                return !!/^1\d{10}$/.test(e)
            },
            copyContent: function(e) {
                var t = document.createElement("input");
                t.value = e, document.body.appendChild(t), t.select(), t.setSelectionRange(0, t.value.length), document.execCommand("Copy"), document.body.removeChild(t)
            },
            formatNum: function(e) {
                var t = "",
                    i = 0,
                    a = e.toString();
                if (-1 == a.indexOf(".")) {
                    for (var o = a.length - 1; o >= 0; o--) t = i % 3 == 0 && 0 != i ? a.charAt(o) + "," + t : a.charAt(o) + t, i++;
                    return a = t
                }
                for (o = a.indexOf(".") - 1; o >= 0; o--) t = i % 3 == 0 && 0 != i ? a.charAt(o) + "," + t : a.charAt(o) + t, i++;
                return a = t + (a + "00").substr((a + "00").indexOf("."), 3)
            },
            changeMoney: function(e) {
                if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(e)) return "数据非法";
                var t = "千百拾亿千百拾万千百拾元角分",
                    i = "",
                    a = (e += "00").indexOf(".");
                a >= 0 && (e = e.substring(0, a) + e.substr(a + 1, 2)), t = t.substr(t.length - e.length);
                for (var o = 0; o < e.length; o++) i += "零壹贰叁肆伍陆柒捌玖".charAt(e.charAt(o)) + t.charAt(o);
                return i.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "")
            }
        }
    },
    TzxS: function(e, t) {},
    ZyHu: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcExXW2FXW2NXW2NYW2FXW2JVXWRXW2JXW2JXXGJXW2JXW2JkaG/i4+T///90d33Oz9H09fWRlJi7vcDsyMknAAAAC3RSTlMAx8KJVNghPun5inq8Bz0AAAC1SURBVCjPfZNZEoQgDEQDiASD4HL/uw6GEWWR/qLyilSnCQC3jJJoLUploNakKUtPBZoFFRLzwwxSJcy9jaVG9k9npI4wdRbUlWCf9KHLs26qbnM8UXTTstVvfDCwdNjKN0mB/GQkgecIocMI4Qog7HfhzcgyzKWCRYgvgyWLbZOhsPuzZtGQokwrFke5Qzi8r1gMIcd31Ey/gz9cG/zwycaPPVyT8YKNV3O81Nx7Sd9heTr+AGCYGtKv/apzAAAAAElFTkSuQmCC"
    },
    fZIZ: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i("PVEY"),
            o = i("3cXf"),
            n = i.n(o),
            s = i("CHJC"),
            r = i("hj3T"),
            c = i("JaHG"),
            u = i("6huz"),
            l = {
                name: "AppContract",
                data: function() {
                    return {
                        active: 1,
                        allNum: 4,
                        type: 0,
                        winTopFlag: !1,
                        iouDetailInfo: {},
                        remainTime: 0,
                        _computerTime: "",
                        timeHour: "00",
                        timeMinutes: "00",
                        timeSeconds: "00",
                        justiceId: "",
                        idCardNum: "",
                        shareImgUrl: "",
                        finishFlag: !0,
                        exContractShowFlag: "",
                        iouStatus: "",
                        signRole: "",
                        pageShowFlag: !1,
                        pdfUrlLink: ""
                    }
                },
                computed: {
                    detailStyle: function() {
                        return {
                            position: "relative",
                            bottom: 0,
                            width: "94%"
                        }
                    },
                    setHeight: function() {
                        return {
                            height: "auto",
                            backgroundColor: "white"
                        }
                    }
                },
                created: function() {
                    document.title = " "
                },
                mounted: function() {
                    var e = this;
                    window.getUserInfoCall = function(t) {
                        e.idCardNum = JSON.parse(t).idCardNum
                    }, u.a.getUserInfo(getUserInfoCall), this.justiceId = c.a.getQuery("justiceId"), this.justiceId || (this.justiceId = c.a.getQuery("exInfo")), this.type = c.a.getQuery("type"), this.userCollectIou(), this.getIouInfo(), document.title = "签约授权4/5"
                },
                methods: {
                    confirmContract: function() {
                        window.location.href = s.a.hrefUrl + "confirm-identity.html"
                    },
                    checkRealName: function() {
                        var e = this;
                        this.idCardNum ? r.a.getQrcode(this.iouId).then(function(t) {
                            e.shareImgUrl = t, u.a.shareImageV2(e.shareImgUrl, "weixin,qq,email,sms", 1, "通过以下入口邀请签署")
                        }, function(t) {
                            e.$toast(t.msg)
                        }) : c.a.checkIos() ? this.winTopFlag = !0 : u.a.navigateByRouter("hmiou://m.54jietiao.com/facecheck/checkLiveness")
                    },
                    getIouInfo: function() {
                        var e = this;
                        r.a.appGetWaitIouInfo(this.justiceId).then(function(t) {
                            e.iouDetailInfo = t, e.remainTime = t.leftTime, e.iouId = t.iouId, e.exContractShowFlag = t.exContractShowType, e.iouStatus = t.iouStatus, 2 == e.iouStatus && (e.active = 3, e.pdfUrlLink = t.pdfUrl, localStorage.setItem("pdfUrlHref", e.pdfUrlLink)), e.signRole = t.signRole, e.iouDetailInfo.nextReturnDate = e.iouDetailInfo.nextReturnDate.substr(0, 10).replace(/-/g, "."), e.iouDetailInfo.amount = c.a.formatNum(t.amount), e.pageShowFlag = !0, e.computeTime()
                        }, function(t) {
                            e.pageShowFlag = !1, 304063 == t.code ? window.location.href = s.a.hrefUrl + "refuse-view.html" : 301010 == t.code ? (localStorage.setItem("errAge", t.msg), window.location.href = s.a.hrefUrl + "err-ages.html") : window.location.href = s.a.hrefUrl + "page-err.html?page=app"
                        })
                    },
                    toAppIouDetail: function() {
                        c.a.checkIos() ? 3 != this.signRole && 12 != this.iouStatus && 13 != this.iouStatus ? u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/elec_borrow_detail_v2?iouId=" + this.iouId) : u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/elec_borrow_detail_v2_pre?iouId=" + this.iouId) : u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/elec_borrow_detail_v2?iou_id=" + this.iouId)
                    },
                    confirmRightNow: function() {
                        this.idCardNum ? c.a.checkIos() ? u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/elec_borrow_detail_v2_pre?iouId=" + this.iouId) : u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/elec_borrow_detail_v2?iou_id=" + this.iouId) : c.a.checkIos() ? this.winTopFlag = !0 : u.a.navigateByRouter("hmiou://m.54jietiao.com/facecheck/checkLiveness")
                    },
                    computeTime: function() {
                        var e = this;
                        this._computerTime = setInterval(function() {
                            e.remainTime <= 0 ? (clearInterval(e._computerTime), 12 == e.iouStatus && (e.iouStatus = 13)) : (e.remainTime = e.remainTime - 1, localStorage.setItem("remainTime", e.remainTime), e.timeHour = parseInt(e.remainTime / 3600), e.timeHour < 10 && (e.timeHour = "0" + e.timeHour), e.timeMinutes = parseInt((e.remainTime - 3600 * e.timeHour) / 60), e.timeMinutes < 10 && (e.timeMinutes = "0" + e.timeMinutes), e.timeSeconds = e.remainTime - 3600 * e.timeHour - 60 * e.timeMinutes, e.timeSeconds < 10 && (e.timeSeconds = "0" + e.timeSeconds))
                        }, 1e3)
                    },
                    realNameNow: function() {
                        u.a.navigateByRouter("hmiou://m.54jietiao.com/facecheck/preViewController")
                    },
                    linkPdfUrl: function() {
                        this.pdfUrlLink = encodeURIComponent(localStorage.getItem("pdfUrlHref")), this.idCardNum ? c.a.checkIos() ? u.a.navigateByRouter("hmiou://m.54jietiao.com/iou_create/elec_borrow_certificate?contractID=" + this.iouId + "&urlString=" + this.pdfUrlLink + "&type=1&routeType=5") : (u.a.navigateByRouter("hmiou://m.54jietiao.com/iou/contract_pdf_detail?iou_id=" + this.iouId + "&pdf_url=" + this.pdfUrlLink), u.a.closeWebView()) : c.a.checkIos() ? this.winTopFlag = !0 : u.a.navigateByRouter("hmiou://m.54jietiao.com/facecheck/checkLiveness")
                    },
                    knowPage: function() {
                        u.a.closeWebView()
                    },
                    userCollectIou: function() {
                        r.a.collecIouMoney(this.justiceId).then(function(e) {
                            u.a.notifyEvent(n()({
                                eventName: "refresh",
                                result: 1
                            }))
                        }, function(e) {
                            console.log(e.msg)
                        })
                    }
                }
            }, f = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return e.pageShowFlag ? a("div", {
                        staticClass: "share-index"
                    }, [a("div", {
                        staticStyle: {
                            "margin-bottom": "50px",
                            "overflow-y": "scroll"
                        }
                    }, [a("van-row", {
                        staticClass: "share-top",
                        nativeOn: {
                            click: function(t) {
                                return e.toAppIouDetail(t)
                            }
                        }
                    }, [a("van-col", {
                        attrs: {
                            span: 6
                        }
                    }, [a("img", {
                        staticClass: "top-img",
                        attrs: {
                            src: i("sQfc")
                        }
                    })]), e._v(" "), a("van-col", {
                        attrs: {
                            span: 17,
                            offset: 1
                        }
                    }, [a("h2", {
                        staticClass: "top-borrow"
                    }, [e._v("借到 ￥" + e._s(e.iouDetailInfo.amount))]), e._v(" "), a("p", {
                        staticClass: "top-info"
                    }, [e._v("出借方  " + e._s(e.iouDetailInfo.loanerName) + "  |  借到方  " + e._s(e.iouDetailInfo.borrowerName))]), e._v(" "), a("p", {
                        staticClass: "top-time"
                    }, [e._v("归还时间：" + e._s(e.iouDetailInfo.nextReturnDate))]), e._v(" "), a("p", {
                        staticClass: "top-way"
                    }, [e._v("归还方式：一次性付清")])])], 1), e._v(" "), a("van-row", {
                        staticClass: "step-select"
                    }, [a("van-col", {
                        staticClass: "left-content",
                        attrs: {
                            span: 19
                        }
                    }, [a("h4", [e._v("合成：电子合同")]), e._v(" "), a("h4", [e._v("签署：" + e._s(e.iouDetailInfo.borrowerName))]), e._v(" "), a("h4", [e._v("签署：" + e._s(e.iouDetailInfo.loanerName))]), e._v(" "), a("h4", [e._v("履行：按条款履约后合同生效")])]), e._v(" "), a("van-col", {
                        attrs: {
                            span: 2,
                            offset: 3
                        }
                    }, e._l(e.allNum, function(t, o) {
                        return a("div", {
                            key: o,
                            staticClass: "right-content"
                        }, [a("img", {
                            staticStyle: {
                                width: "20px",
                                height: "20px"
                            },
                            attrs: {
                                src: e.active >= o ? i("ZyHu") : i("EoZV")
                            }
                        }), e._v(" "), o != e.allNum - 1 ? a("span", {
                            staticClass: "right-line"
                        }) : e._e()])
                    }), 0)], 1), e._v(" "), a("p", {
                        staticClass: "share-index-remark"
                    }, [e._v("备注：如果过了" + e._s(e.iouDetailInfo.endDateTime) + "之后未签署，签章次数自动如数退回。\n      如果签约完成，系统会发送合同到各位邮箱，请注意查收 邮件（部分邮件可能被疑似为垃圾文件）。")])], 1), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 12 == e.iouStatus,
                            expression: "iouStatus == 12"
                        }],
                        staticClass: "share-index-bottom"
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 != e.signRole,
                            expression: "signRole != 2"
                        }]
                    }, [a("p", [e._v("还剩"), a("span", [e._v("  " + e._s(e.timeHour) + " ： " + e._s(e.timeMinutes) + " ： " + e._s(e.timeSeconds) + " ")]), e._v("失效")]), e._v(" "), a("button", {
                        on: {
                            click: e.checkRealName
                        }
                    }, [e._v("由【" + e._s(e.iouDetailInfo.signatoryName) + "】确认并签署")])]), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 == e.signRole && 0 == e.exContractShowFlag,
                            expression: "(signRole == 2)  && (exContractShowFlag == 0)"
                        }],
                        staticClass: "share-index-bottom"
                    }, [0 == e.exContractShowFlag ? a("div", [a("button", {
                        on: {
                            click: e.confirmRightNow
                        }
                    }, [e._v("立即确认")])]) : e._e()])]), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 == e.iouStatus,
                            expression: "iouStatus == 2"
                        }],
                        staticClass: "share-index-bottom"
                    }, [a("div", [a("van-button", {
                        attrs: {
                            type: "default"
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.linkPdfUrl(t)
                            }
                        }
                    }, [e._v("查看并收录合同")])], 1)]), e._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 13 == e.iouStatus,
                            expression: "iouStatus == 13"
                        }],
                        staticClass: "share-index-bottom"
                    }, [a("div", [a("p", {
                        staticClass: "unsign-contract"
                    }, [e._v("到期未签署，合同自动关闭")]), e._v(" "), a("van-button", {
                        staticClass: "back-sigh",
                        attrs: {
                            type: "default"
                        }
                    }, [e._v("系统自动返回所有签章次数")])], 1)]), e._v(" "), e.winTopFlag ? a("div", {
                        staticClass: "win-top"
                    }, [a("div", {
                        staticClass: "win-detail"
                    }, [a("h4", [e._v("实名用户才能查看")]), e._v(" "), a("p", {
                        staticClass: "the-reason"
                    }, [e._v("为什么需要实名认证呢？")]), e._v(" "), a("p", {
                        staticClass: "server-wx"
                    }, [e._v("依据《中华人民共和国签名法》《中华共和国合同法》的相关规定，合法有效的电子借条，签署人的身份必须事先获得认证备案，否则借条无效。")]), e._v(" "), a("van-row", {
                        staticClass: "win-detail-bottom"
                    }, [a("van-col", {
                        staticClass: "win-detail-cancel",
                        attrs: {
                            span: 12
                        },
                        nativeOn: {
                            click: function(t) {
                                e.winTopFlag = !1
                            }
                        }
                    }, [e._v("以后再说")]), e._v(" "), a("van-col", {
                        staticClass: "win-detail-copy",
                        attrs: {
                            span: 12
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.realNameNow(t)
                            }
                        }
                    }, [e._v("立即认证")])], 1)], 1)]) : e._e()]) : e._e()
                },
                staticRenderFns: []
            };
        var m = i("C7Lr")(l, f, !1, function(e) {
                i("TzxS")
            }, null, null).exports,
            g = (i("HSl9"), i("xEr2")),
            p = i.n(g),
            h = i("ACQA"),
            d = i.n(h),
            v = i("jAJk"),
            w = i.n(v),
            I = i("vO8f"),
            A = i.n(I),
            C = i("C3aO"),
            _ = i.n(C),
            y = i("H1/c"),
            S = i.n(y),
            M = i("iDdd"),
            H = i.n(M);
        a.
        default.use(p.a).use(d.a).use(w.a).use(A.a).use(_.a).use(S.a), H.a.attach(document.body), H.a.prototype.focus = function(e) {
            var t;
            deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.focus(), e.setSelectionRange(t, t)) : e.focus()
        }, new a.
        default ({
            el: "#app",
            components: {
                AppContract: m
            },
            template: "<AppContract/>"
        })
    },
    hj3T: function(e, t, i) {
        "use strict";
        var a = i("rVsN"),
            o = i.n(a),
            n = i("aozt"),
            s = i.n(n);
        i("6huz").a.getUserInfo(function(e) {
            var t = JSON.parse(e);
            localStorage.setItem("userId", t.userId), localStorage.setItem("token", t.token), localStorage.setItem("nickName", t.nickName)
        });

        function r(e, t) {
            return {
                code: e,
                msg: t
            }
        }
        s.a.interceptors.request.use(function(e) {
            var t = localStorage.getItem("userId"),
                i = localStorage.getItem("token");
            return e.headers["data-Type"] = "json", t && (e.headers.id = t), e.headers.token = i, e.headers["Content-Type"] = "application/json", e
        }, function(e) {
            return o.a.reject(e)
        }), s.a.interceptors.response.use(function(e) {
            if (e.status >= 200 && e.status < 300) {
                var t = e.data;
                return 0 == t.retCode ? o.a.resolve(t.data) : o.a.reject(r(t.retCode, t.retMsg))
            }
            return o.a.reject(r(null, "连接到服务器失败"))
        }, function(e) {
            return o.a.reject(r(null, "连接到服务器失败"))
        }), s.a.defaults.timeout = 3e4;
        var c = {
            axios: s.a,
            get: function(e, t) {
                return s.a.get(e, t)
            },
            post: function(e, t, i) {
                return s.a.post(e, t, i)
            }
        };
        t.a = {
            getWaitConfirmIou: function(e) {
                return c.get("/api/iou/front/v2/moneyV2/out/waitConfirmInfoOut?justiceId=" + e)
            },
            checkUser: function(e) {
                return c.post("/api/iou/front/v2/moneyV2/out/checkName", e)
            },
            getCode: function(e) {
                return c.post("/api/base/msg/v1/sendMessage", e)
            },
            confirPdf: function(e) {
                return c.post("/api/iou/front/v2/moneyV2/out/confirmOut", e)
            },
            getIouDetail: function(e) {
                return c.get("/api/iou/front/v2/moneyV2/out/detailOut?iouId=" + e)
            },
            appGetWaitIouInfo: function(e) {
                return c.get("/api/iou/front/v2/moneyV2/inner/waitConfirmInfo?justiceId=" + e)
            },
            getQrcode: function(e) {
                return c.get("/api/iou/front/v2/moneyV2/inner/getShareQRcode?iouId=" + e)
            },
            getCopyContent: function(e) {
                return c.post("/api/iou/front/v2/moneyV2/getShearPlate", e)
            },
            collecIouMoney: function(e) {
                return c.get("/api/iou/front/v2/moneyV2/inner/deleteToInclude?justiceId=" + e)
            }
        }
    },
    sQfc: function(e, t, i) {
        e.exports = i.p + "static/img/hetong.e21b7a3.png"
    }
}, ["fZIZ"]);
//# sourceMappingURL=app-contract.f800d5d9ca840285e991.js.map
