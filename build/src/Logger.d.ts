declare class Logger {
    constructor();
    info: (message: any) => void;
    warn: (message: any) => void;
    debug: (message: any, ...args: any[]) => void;
    error: (message: any) => void;
}
declare const _default: Logger;
export default _default;
