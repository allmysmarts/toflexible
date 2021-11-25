## Install

`
$ npm install --save toflexible
`

## Usage

```
var toFlexible = require('toflexible');

toFlexible(0.000000000234234234, 3)
// => 0.000000000234

toFlexible(0.00001201442224)  // default 2
// => 0.000012

toFlexible(12330.00000234234234, 3)
// => 12,330.000

toFlexible(25252021, 3)
// => 25,252,021.000
```

Description: it will return decimals with round and fixed number of fractions after continuous zero, as localized format.

Usage: cryptocurrency, DeFi, DEX, TradingView ...
