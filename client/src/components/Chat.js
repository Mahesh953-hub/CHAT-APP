"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useWebSocket_1 = require("../hooks/useWebSocket");
var messageStore_1 = require("../store/messageStore");
var date_fns_1 = require("date-fns");
var Chat = function () {
    var _a = (0, react_1.useState)(''), message = _a[0], setMessage = _a[1];
    var sendMessage = (0, useWebSocket_1.useWebSocket)().sendMessage;
    var messages = (0, messageStore_1.useMessages)(function (state) { return state.messages; });
    var handleSubmit = function (e) {
        e.preventDefault();
        if (message.trim()) {
            sendMessage(message);
            setMessage('');
        }
    };
    return (<div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map(function (msg) { return (<div key={msg.id} className={"flex ".concat(msg.isMine ? 'justify-end' : 'justify-start')}>
            <div className={"max-w-xs md:max-w-md p-3 rounded-lg ".concat(msg.isMine
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white')}>
              <p>{msg.content}</p>
              <span className="text-xs opacity-75">
                {(0, date_fns_1.formatRelative)(new Date(msg.timestamp), new Date())}
              </span>
            </div>
          </div>); })}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input type="text" value={message} onChange={function (e) { return setMessage(e.target.value); }} className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-2" placeholder="Type a message..."/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>);
};
exports.default = Chat;
