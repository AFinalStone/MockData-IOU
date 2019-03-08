/*********获取UserAgent***********/
var UA = navigator.userAgent;
var android = UA.indexOf('HMAndroidWebView') > -1; //判断是Android设备
var iosUI = UA.indexOf('HMiOSUIWebView') > -1; //判断是ios的webuiwebview
var iosWK = UA.indexOf('HMiOSWKWebView') > -1; //判断是ios的wkwebview


/**
 * 检测是否在APP中
 */
function checkApp() {
	if (android || iosUI || iosWK) {
		return true;
	} else {
		return false;
	}
}




/**
 * 版本号的比较
 * @param curV
 * @param reqV
 * @returns {boolean}
 * @constructor
 */
function Version(curV, reqV) {

	var arr1 = curV.toString().split('.');
	var arr2 = reqV.toString().split('.');


	//将两个版本号拆成数字
	var minL = Math.min(arr1.length, arr2.length);
	var pos = 0; //当前比较位
	var diff = 0; //当前为位比较是否相等
	var flag = false;

	//逐个比较如果当前位相等则继续比较下一位
	while (pos < minL) {
		diff = parseInt(arr1[pos]) - parseInt(arr2[pos]);
		if (diff == 0) {
			pos++;
			continue;
		} else if (diff > 0) {
			flag = true;
			break;
		} else {
			flag = false;
			break;
		}
	}
	return flag;
}
