"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("./Event");
const store_1 = require("./redux/store");
// TODO: Work on the name for this class (`Internal` prefix basically as that will be the root name)
class SDKInternal {
    constructor() {
        this.registerEvent = (eventName) => {
            this.event.registerEventName(eventName);
        };
        this.getEvents = () => {
            return this.store.getState().event.events;
        };
        // For Debugging Store
        this.getCurrentStoreState = () => {
            return this.store.getState();
        };
        this.store = store_1.default;
        this.event = new Event_1.default();
        console.log(store_1.default.getState());
    }
}
exports.default = new SDKInternal();
//# sourceMappingURL=SDKInternal.js.map