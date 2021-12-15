import {LOG_LEVEL} from './utils/constants';
class Logger {
  constructor() {}
  /* 
    LOG Format
    Timestamp - Timestamp at which the log was posted,
    Severity Level - Severity Level of the log,
    TAG - To tag the log with custom user provided tag,
    message - message is used to make the log verbose,
    ...args - Extra arguments for users to add for making the log verbose
  */

  info = (TAG: string, message: string, {...args}: any = {}) => {
    console.info(
      new Date().getTime(),
      ` \x1b[36m${LOG_LEVEL.INFO}\x1b[0m `,
      `[ ${TAG} ] `,
      {
        message,
        ...args,
      }
    );
  };

  warn = (TAG: string, message: string, {...args}: any = {}) => {
    console.warn(
      new Date().getTime(),
      ` \x1b[33m${LOG_LEVEL.WARN}\x1b[0m `,
      `[ ${TAG} ] `,
      {
        message,
        ...args,
      }
    );
  };

  debug = (TAG: string, message: string, {...args}: any = {}) => {
    console.debug(
      new Date().getTime(),
      ` \x1b[37m${LOG_LEVEL.DEBUG}\x1b[0m `,
      `[ ${TAG} ] `,
      {
        message,
        ...args,
      }
    );
  };

  error = (TAG: string, message: string, {...args}: any = {}) => {
    console.error(
      new Date().getTime(),
      ` \x1b[31m${LOG_LEVEL.ERROR}\x1b[0m `,
      `[ ${TAG} ] `,
      {
        message,
        ...args,
      }
    );
  };
}

export default new Logger();
