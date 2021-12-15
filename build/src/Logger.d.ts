declare class Logger {
    constructor();
    info: (TAG: string, message: string, { ...args }?: any) => void;
    warn: (TAG: string, message: string, { ...args }?: any) => void;
    debug: (TAG: string, message: string, { ...args }?: any) => void;
    error: (TAG: string, message: string, { ...args }?: any) => void;
}
declare const _default: Logger;
export default _default;
