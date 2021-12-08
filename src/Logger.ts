import {LOG_LEVEL} from './utils/constants';
class Logger {
  constructor() {}

  info = (message: any) => {
    console.info('\x1b[36m%s\x1b[0m', {
      level: LOG_LEVEL.INFO,
      message,
    });
  };

  warn = (message: any) => {
    console.warn('\x1b[33m%s\x1b[0m', {
      level: LOG_LEVEL.WARN,
      message,
    });
  };

  debug = (message: any, ...args: any[]) => {
    console.debug({
      level: LOG_LEVEL.DEBUG,
      message,
      ...args,
    });
  };

  error = (message: any) => {
    console.error('\x1b[31m%s\x1b[0m', {
      level: LOG_LEVEL.ERROR,
      message,
    });
  };
}

export default new Logger();
