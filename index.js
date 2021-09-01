const toFixed = (x, digits) => Math.round( x * (10 ** digits) ) / (10 ** digits)
const toFlexible = (x, n = 2) => {
	for (let i = 0; i< 15; i++) {
  	if (toFixed(x, i) > 0) {
    	return toFixed(x, i+n).toLocaleString(undefined, {maximumFractionDigits: 15, minimumFractionDigits: 2})
    }
  }
}

module.exports = toFlexible
