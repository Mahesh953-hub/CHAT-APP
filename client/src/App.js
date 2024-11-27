"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Chat_1 = require("./components/Chat");
var Profile_1 = require("./components/Profile");
var ThemeSwitcher_1 = require("./components/ThemeSwitcher");
var useTheme_1 = require("./hooks/useTheme");
function App() {
    var theme = (0, useTheme_1.useTheme)().theme;
    return (<div className={"min-h-screen ".concat(theme === 'dark' ? 'dark' : '')}>
      <react_router_dom_1.BrowserRouter>
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chat App</h1>
              <ThemeSwitcher_1.default />
            </div>
          </header>

          <main className="flex-1 overflow-hidden">
            <react_router_dom_1.Routes>
              <react_router_dom_1.Route path="/" element={<Chat_1.default />}/>
              <react_router_dom_1.Route path="/profile" element={<Profile_1.default />}/>
            </react_router_dom_1.Routes>
          </main>
        </div>
      </react_router_dom_1.BrowserRouter>
    </div>);
}
exports.default = App;
