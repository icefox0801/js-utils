/**
 * Transfer an array[Object] to a plain object, object is expected to have attribute name and value
 * For example, we have a key-value pair array as below(Can be returned from the serializedArray() method in jQuery):
 * var date = [{name: 'username', value: 'ArrayToObject'},{name: 'date', value: '2013-05-09'}], then call date.toObj(),
 * {username: 'Array', date: '2013-05-09'} we will get.
 * @returns {{}} a plain object with all key-value pair in array converted to attribute name and attribute value
 */
var toObject = function () {
	var that = this.concat();
	var keyValuePair = {};
	var jsonObj = {};
	while (keyValuePair = that.pop()) {
		jsonObj[keyValuePair['name']] = keyValuePair['value'];
	}
	return jsonObj;
};

Array.prototype.toObj || (Array.prototype.toObj = toObject);
