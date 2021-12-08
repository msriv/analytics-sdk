"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./redux/event/reducer");
const store_1 = require("./redux/store");
class Event {
    constructor() {
        this.timestamp = 0;
        this.eventId = '';
        this.eventType = '';
        this.registerEventName = (eventName) => {
            if (typeof eventName === 'string') {
                this.store.dispatch((0, reducer_1.registerEvent)(eventName));
            }
            else if (typeof eventName === 'object') {
                eventName.forEach(event => this.store.dispatch((0, reducer_1.registerEvent)(event)));
            }
            else {
                throw new TypeError('Invalid Argument Type');
            }
        };
        this.store = store_1.default;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map