"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const chai_1 = require("chai");
describe('match a period in a string', function () {
    it('leading', function () {
        const string = '. leading period';
        const match = string.match(index_1.regex);
        const expected = '.';
        chai_1.expect(match).to.be.ok;
        chai_1.expect(match[0]).to.equal(expected);
    });
    it('leading - global', function () {
        const string = '. leading period';
        const match = string.match(index_1.globalRegex);
        const expected = '.';
        chai_1.expect(match).to.be.ok;
        chai_1.expect(match[0]).to.equal(expected);
    });
    it('middle', function () {
        const string = 'perion in then . middle';
        const match = string.match(index_1.regex);
        const expected = '.';
        chai_1.expect(match).to.be.ok;
        chai_1.expect(match[0]).to.equal(expected);
    });
    it('end', function () {
        const string = 'perion at the end.';
        const match = string.match(index_1.regex);
        const expected = '.';
        chai_1.expect(match).to.be.ok;
        chai_1.expect(match[0]).to.equal(expected);
    });
});
//# sourceMappingURL=01-match.js.map