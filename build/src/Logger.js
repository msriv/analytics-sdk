"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./utils/constants");
class Logger {
    constructor() {
        this.info = (message) => {
            console.info('\x1b[36m%s\x1b[0m', {
                level: constants_1.LOG_LEVEL.INFO,
                message,
            });
        };
        this.warn = (message) => {
            console.warn('\x1b[33m%s\x1b[0m', {
                level: constants_1.LOG_LEVEL.WARN,
                message,
            });
        };
        this.debug = (message, ...args) => {
            console.debug({
                level: constants_1.LOG_LEVEL.DEBUG,
                message,
                ...args,
            });
        };
        this.error = (message) => {
            console.error('\x1b[31m%s\x1b[0m', {
                level: constants_1.LOG_LEVEL.ERROR,
                message,
            });
        };
    }
}
exports.default = new Logger();
//# sourceMappingURL=Logger.js.map