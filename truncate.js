/**
 * Function to truncate a sequence to a sequent array with fixed length, can be used on pagination.
 * For example, we want to truncate 5 numbers from 1 to 9 with 4 in the middle of truncated array:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9], then truncate(4, 1, 9, 2)
 *     <  <  |  >  >
 *    [2, 3, 4, 5, 6] we will get. And
 * [1, 2, 3, 4, 5, 6, 7, 8, 9], then truncate(2, 1, 9, 2)
 *  <  |  >  >
 * [1, 2, 3, 4] we will get, for 0 is out of the index of the array.
 * @param value the middle number of the truncated sequence
 * @param start the start value of the array
 * @param end the end value of the array
 * @param halfLen the length truncated on single side, the length is 2*halfLen + 1
 * @returns {Array} the array truncated
 */
var truncate = function (value, start, end, halfLen) {
	if (start > end || value < start || value > end) {
		throw new Error('invalid arguments!');
	}
	if (!halfLen) {
		halfLen = 2;
	}
	var result = [];
	var length = 2 * halfLen + 1;
	var lOffset = value - halfLen - start;
	var rOffset = value + halfLen - end;
	var lDrift = lOffset < 0 ? lOffset : 0;
	var rDrift = rOffset > 0 ? rOffset : 0;
	var drift = lDrift + rDrift;
	value = value - halfLen - drift;
	for (var i = 0; i < length; i++) {
		if (start <= value && end >= value) {
			result.push(value);
		}
		value++;
	}
	return result;
};

/**
 * The array version of truncate
 * @param index the midden position of the truncated array
 * @param halfLen the length truncated on single side, the length is 2*halfLen + 1
 * @returns {Array} the array truncated
 */
var arrayTruncate = function (index, halfLen) {
	if (!halfLen) {
		halfLen = 2;
	}
	var arrLen = this.length;
	var result = [];
	var length = 2 * halfLen + 1;
	var lOffset = index - halfLen;
	var rOffset = index + halfLen - arrLen;
	var lDrift = lOffset < 0 ? lOffset : 0;
	var rDrift = rOffset > 0 ? rOffset : 0;
	var drift = lDrift + rDrift;
	index = index - halfLen - drift;
	for (var i = 0; i < length; i++) {
		if (0 <= index && arrLen >= index) {
			result.push(this[index]);
		}
		index++;
	}
	return result;
};
Array.prototype.truncate || (Array.prototype.truncate = arrayTruncate);