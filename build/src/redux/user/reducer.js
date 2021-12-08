"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreated = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const actions_1 = require("./actions");
const initialState = {
    email: '',
    username: '',
    isAuth: false,
    apiKey: '',
};
const userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        userCreated: (state, action) => actions_1.actions.userCreated(action.payload),
    },
});
exports.userCreated = userSlice.actions.userCreated;
exports.default = userSlice.reducer;
//# sourceMappingURL=reducer.js.map