const toFixed = (x, digits) => Math.round(x * (10 ** digits)) / (10 ** digits)
const toFlexible = (x, n = 2) => {
	for (let i = 0; i < 18; i++) {
		if(x * (10 ** i) > 0.1) {
		  return toFixed(x, i + n).toLocaleString(undefined, { minimumFractionDigits: n, maximumFractionDigits: 18 });
		}
	}
}

module.exports = toFlexible
