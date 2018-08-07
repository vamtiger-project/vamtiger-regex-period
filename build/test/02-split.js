"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const chai_1 = require("chai");
describe('split a string by', function () {
    it('period', function () {
        const string = 'some/string.1.2.3';
        const split = string.split(index_1.regex);
        const expected = '.';
        chai_1.expect(split).to.be.ok;
        chai_1.expect(split.length).to.equal(4);
        chai_1.expect(split[0]).to.equal('some/string');
        chai_1.expect(split[1]).to.equal('1');
        chai_1.expect(split[2]).to.equal('2');
        chai_1.expect(split[3]).to.equal('3');
    });
});
//# sourceMappingURL=02-split.js.map