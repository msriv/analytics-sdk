"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const reducer_1 = require("./user/reducer");
const reducer_2 = require("./event/reducer");
const store = (0, toolkit_1.configureStore)({
    reducer: { user: reducer_1.default, event: reducer_2.default },
});
exports.default = store;
//# sourceMappingURL=store.js.map