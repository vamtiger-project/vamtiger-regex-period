import * as xregexp from 'xregexp';

const XRegExp = xregexp;
const pattern = '\\.';

export const regex = XRegExp(pattern);
export const globalRegex = XRegExp(pattern, 'g');
export const multilineRegex = XRegExp(pattern, 'm');
export const globalMultilineRegex = XRegExp(pattern, 'gm');