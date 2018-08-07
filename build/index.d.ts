/// <reference types="xregexp" />
declare module "pattern" {
    const _default: "\\.";
    export default _default;
}
declare module "global-multiline" {
    const _default_1: RegExp;
    export default _default_1;
}
declare module "global" {
    const _default_2: RegExp;
    export default _default_2;
}
declare module "regex" {
    import * as xregexp from 'xregexp';
    export const XRegExp: typeof xregexp;
    const _default_3: RegExp;
    export default _default_3;
}
declare module "multiline" {
    const _default_4: RegExp;
    export default _default_4;
}
declare module "index" {
    export { default as regex } from "regex";
    export { default as globalRegex } from "global";
    export { default as multilineRegex } from "multiline";
    export { default as globalMultilineRegex } from "global-multiline";
}
declare module "test/01-match" { }
declare module "test/02-split" { }
declare module "test/03-replace" { }
