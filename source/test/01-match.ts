import { regex, globalRegex } from '../index';
import { expect } from 'chai';

describe('match a period in a string', function () {
    it('leading', function () {
        const string = '. leading period';
        const match = string.match(regex);
        const expected = '.';

        expect(match).to.be.ok;
        expect(match[0]).to.equal(expected);
    });

    it('leading - global', function () {
        const string = '. leading period';
        const match = string.match(globalRegex);
        const expected = '.';

        expect(match).to.be.ok;
        expect(match[0]).to.equal(expected);
    });

    it('middle', function () {
        const string = 'perion in then . middle';
        const match = string.match(regex);
        const expected = '.';

        expect(match).to.be.ok;
        expect(match[0]).to.equal(expected);
    });

    it('end', function () {
        const string = 'perion at the end.';
        const match = string.match(regex);
        const expected = '.';

        expect(match).to.be.ok;
        expect(match[0]).to.equal(expected);
    });
});