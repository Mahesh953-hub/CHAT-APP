"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageInput = void 0;
var react_1 = require("react");
var MessageInput = function (_a) {
    var onSendMessage = _a.onSendMessage;
    var _b = (0, react_1.useState)(''), message = _b[0], setMessage = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };
    return (<form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" value={message} onChange={function (e) { return setMessage(e.target.value); }} className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-2" placeholder="Type a message..."/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Send
      </button>
    </form>);
};
exports.MessageInput = MessageInput;
