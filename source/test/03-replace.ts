import { expect } from 'chai';

const { regex, globalRegex, multilineRegex, globalMultilineRegex } = require('..');
const replacement = '*';

describe('replace a period', function () {
    it('period', function () {
        const string = 'some/string.1.2.3';
        const replace = string.replace(regex, replacement);
        const expected = 'some/string*1.2.3';

        expect(replace).to.be.ok;
        expect(replace).to.equal(expected);
    });

    it('period - global', function () {
        const string = 'some/string.1.2.3';
        const replace = string.replace(globalRegex, replacement);
        const expected = 'some/string*1*2*3';

        expect(replace).to.be.ok;
        expect(replace).to.equal(expected);
    });

    it('period - multiline', function () {
        const string = [
            'some/string',
            '.1.2.3'
        ].join('\n');
        const replace = string.replace(multilineRegex, replacement);
        const expected = [
            'some/string',
            '*1.2.3'
        ].join('\n');

        expect(replace).to.be.ok;
        expect(replace).to.equal(expected);
    });

    it('period - global multiline', function () {
        const string = [
            'some/string',
            '.1.2.3'
        ].join('\n');
        const replace = string.replace(globalMultilineRegex, replacement);
        const expected = [
            'some/string',
            '*1*2*3'
        ].join('\n');

        expect(replace).to.be.ok;
        expect(replace).to.equal(expected);
    });
});