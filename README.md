# VAMTIGER Regex Period
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match a **_period_** character(s) for a defined input string.

## Installation
[VAMTIGER Regex Period](https://github.com/vamtiger-project/vamtiger-regex-period) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-period
```
or
```bash
yarn add vamtiger-regex-period
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex Period](https://github.com/vamtiger-project/vamtiger-regex-period):
```javascript
import { regex } from 'vamtiger-regex-period';
```
or
```javascript
const { regex } = require('vamtiger-regex-period');
```

[VAMTIGER Regex Period](https://github.com/vamtiger-project/vamtiger-regex-period) can then be used to match a **period**:
```javascript
const string = 'perion in then . middle';
const match = string.match(regex);


/**
 * if (match) {
 *     // Yep, the input string contains a period
 * }
 **/
```

Other [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) include:
* globalRegex
* multilineRegex
* globalMultilineRegex
```javascript
import { regex, globalRegex, multilineRegex, globalMultilineRegex } from 'vamtiger-regex-period';

const string = '1.2.3';
const multiLineString = `
    1.2
    3.4
`;

string.split(regex); // [ '1', '2', '3' ]
string.replace(regex, '*'); // '1*2.3'
string.replace(globalRegex, '*'); // '1*2*3'
multiLineString.replace(multilineRegex, '*'); // '\n    1*2\n    3.4\n'
multiLineString.replace(globalMultilineRegex, '*'); // '\n    1*2\n    3*4\n'
```
