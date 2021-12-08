"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvent = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const actions_1 = require("./actions");
const initialState = {
    events: [],
};
const eventSlice = (0, toolkit_1.createSlice)({
    name: 'event',
    initialState,
    reducers: {
        registerEvent: (state, action) => actions_1.actions.registerEvent(state, action.payload),
    },
});
exports.registerEvent = eventSlice.actions.registerEvent;
exports.default = eventSlice.reducer;
//# sourceMappingURL=reducer.js.map