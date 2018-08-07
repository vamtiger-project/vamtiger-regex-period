"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xregexp = require("xregexp");
const pattern_1 = require("./pattern");
const XRegExp = xregexp;
const flags = 'm';
exports.default = XRegExp(pattern_1.default, flags);
//# sourceMappingURL=multiline.js.map