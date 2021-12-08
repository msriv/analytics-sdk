"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SDKInternal_1 = require("./SDKInternal");
SDKInternal_1.default.registerEvent('client.hello');
console.log(SDKInternal_1.default.getEvents());
SDKInternal_1.default.registerEvent(['client.bye', 'event.new', 'client.hello']);
SDKInternal_1.default.registerEvent(12);
console.log(SDKInternal_1.default.getCurrentStoreState());
//# sourceMappingURL=index.js.map