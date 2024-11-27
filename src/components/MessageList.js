"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageList = void 0;
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var MessageList = function (_a) {
    var messages = _a.messages;
    return (<div className="flex-1 overflow-y-auto space-y-4 mb-4">
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
    </div>);
};
exports.MessageList = MessageList;
