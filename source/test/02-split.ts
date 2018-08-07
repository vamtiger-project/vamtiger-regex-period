import { regex } from '../index';
import { expect } from 'chai';

describe('split a string by', function () {
    it('period', function () {
        const string = 'some/string.1.2.3';
        const split = string.split(regex);
        const expected = '.';

        expect(split).to.be.ok;
        expect(split.length).to.equal(4);
        expect(split[0]).to.equal('some/string');
        expect(split[1]).to.equal('1');
        expect(split[2]).to.equal('2');
        expect(split[3]).to.equal('3');
    });
});