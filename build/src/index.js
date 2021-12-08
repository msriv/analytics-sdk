"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
const SDKInternal_1 = require("./SDKInternal");
SDKInternal_1.default.registerEvent('client.hello');
console.log(SDKInternal_1.default.getEvents());
SDKInternal_1.default.registerEvent(['client.bye', 'event.new', 'client.hello']);
console.log(SDKInternal_1.default.getCurrentStoreState());
Logger_1.default.debug('Hello', 'abc');
Logger_1.default.error('Type Error');
Logger_1.default.warn('Warning');
Logger_1.default.info('Info');
//# sourceMappingURL=index.js.map