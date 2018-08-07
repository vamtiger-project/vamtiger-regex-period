import * as xregexp from 'xregexp';
import pattern from './pattern';

const XRegExp = xregexp;
const flags = 'm';

export default XRegExp(pattern, flags);