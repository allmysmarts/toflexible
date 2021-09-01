## Install

`
$ npm install --save toflexible
`

## Usage

`
var toFlexible = require('toflexible');

toFlexible(0.0000234234234, 3)
// => 0.00002342

toFlexible(0.00001201442224)
// => 0.000012

toFlexible(12330.0000234234234, 3)
// => 12,330.00

toFlexible(25252021, 3)
// => 25,252,021.00
`

Description: it will return decimals with round and fixed number of fractions, as localized format.
