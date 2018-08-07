import * as xregexp from 'xregexp';
import pattern from './pattern';

const XRegExp = xregexp;
const flags = 'g';

export default XRegExp(pattern, flags);