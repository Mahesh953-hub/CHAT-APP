"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var react_1 = require("react");
var useWebSocket_1 = require("../hooks/useWebSocket");
var messageStore_1 = require("../store/messageStore");
var MessageList_1 = require("./MessageList");
var MessageInput_1 = require("./MessageInput");
var Chat = function () {
    var sendMessage = (0, useWebSocket_1.useWebSocket)().sendMessage;
    var messages = (0, messageStore_1.useMessages)(function (state) { return state.messages; });
    return (<div className="flex flex-col h-full p-4">
      <MessageList_1.MessageList messages={messages}/>
      <MessageInput_1.MessageInput onSendMessage={sendMessage}/>
    </div>);
};
exports.Chat = Chat;
