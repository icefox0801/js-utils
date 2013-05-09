/*IE7,8 trim fix*/
var trimFix = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
String.prototype.trim || (String.prototype.trim = trimFix);