import * as xregexp from 'xregexp';
import pattern from './pattern';

const XRegExp = xregexp;
const flags = 'gm';

export default XRegExp(pattern, flags);