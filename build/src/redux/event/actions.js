"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
const actions = {
    registerEvent: (state, payload) => {
        const newEvents = [...new Set([...state.events, payload])];
        return {
            ...state,
            events: newEvents,
        };
    },
};
exports.actions = actions;
//# sourceMappingURL=actions.js.map