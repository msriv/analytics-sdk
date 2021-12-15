"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./utils/constants");
class Logger {
    constructor() {
        /*
          LOG Format
          Timestamp - Timestamp at which the log was posted,
          Severity Level - Severity Level of the log,
          TAG - To tag the log with custom user provided tag,
          message - message is used to make the log verbose,
          ...args - Extra arguments for users to add for making the log verbose
        */
        this.info = (TAG, message, { ...args } = {}) => {
            console.info(new Date().getTime(), ` \x1b[36m${constants_1.LOG_LEVEL.INFO}\x1b[0m `, `[ ${TAG} ] `, {
                message,
                ...args,
            });
        };
        this.warn = (TAG, message, { ...args } = {}) => {
            console.warn(new Date().getTime(), ` \x1b[33m${constants_1.LOG_LEVEL.WARN}\x1b[0m `, `[ ${TAG} ] `, {
                message,
                ...args,
            });
        };
        this.debug = (TAG, message, { ...args } = {}) => {
            console.debug(new Date().getTime(), ` \x1b[37m${constants_1.LOG_LEVEL.DEBUG}\x1b[0m `, `[ ${TAG} ] `, {
                message,
                ...args,
            });
        };
        this.error = (TAG, message, { ...args } = {}) => {
            console.error(new Date().getTime(), ` \x1b[31m${constants_1.LOG_LEVEL.ERROR}\x1b[0m `, `[ ${TAG} ] `, {
                message,
                ...args,
            });
        };
    }
}
exports.default = new Logger();
//# sourceMappingURL=Logger.js.map