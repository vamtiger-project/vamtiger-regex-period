"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const chai_1 = require("chai");
const replacement = '*';
describe('replace a period', function () {
    it('period', function () {
        const string = 'some/string.1.2.3';
        const replace = string.replace(index_1.regex, replacement);
        const expected = 'some/string*1.2.3';
        chai_1.expect(replace).to.be.ok;
        chai_1.expect(replace).to.equal(expected);
    });
    it('period - global', function () {
        const string = 'some/string.1.2.3';
        const replace = string.replace(index_1.globalRegex, replacement);
        const expected = 'some/string*1*2*3';
        chai_1.expect(replace).to.be.ok;
        chai_1.expect(replace).to.equal(expected);
    });
    it('period - multiline', function () {
        const string = [
            'some/string',
            '.1.2.3'
        ].join('\n');
        const replace = string.replace(index_1.multilineRegex, replacement);
        const expected = [
            'some/string',
            '*1.2.3'
        ].join('\n');
        chai_1.expect(replace).to.be.ok;
        chai_1.expect(replace).to.equal(expected);
    });
    it('period - global multiline', function () {
        const string = [
            'some/string',
            '.1.2.3'
        ].join('\n');
        const replace = string.replace(index_1.globalMultilineRegex, replacement);
        const expected = [
            'some/string',
            '*1*2*3'
        ].join('\n');
        chai_1.expect(replace).to.be.ok;
        chai_1.expect(replace).to.equal(expected);
    });
});
//# sourceMappingURL=03-replace.js.map