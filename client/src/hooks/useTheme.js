"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useTheme = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return ({
    theme: 'light',
    toggleTheme: function () {
        return set(function (state) { return ({ theme: state.theme === 'light' ? 'dark' : 'light' }); });
    },
}); }, {
    name: 'theme-storage',
}));
