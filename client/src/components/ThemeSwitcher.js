"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useTheme_1 = require("../hooks/useTheme");
var outline_1 = require("@heroicons/react/24/outline");
var ThemeSwitcher = function () {
    var _a = (0, useTheme_1.useTheme)(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (<button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle theme">
      {theme === 'dark' ? (<outline_1.SunIcon className="h-6 w-6 text-yellow-400"/>) : (<outline_1.MoonIcon className="h-6 w-6 text-gray-600"/>)}
    </button>);
};
exports.default = ThemeSwitcher;
