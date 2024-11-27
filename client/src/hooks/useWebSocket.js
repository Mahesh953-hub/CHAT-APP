"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebSocket = void 0;
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
var messageStore_1 = require("../store/messageStore");
var socket;
var useWebSocket = function () {
    var addMessage = (0, messageStore_1.useMessages)(function (state) { return state.addMessage; });
    (0, react_1.useEffect)(function () {
        socket = (0, socket_io_client_1.io)('http://localhost:3000');
        socket.on('message', function (message) {
            addMessage(__assign(__assign({}, message), { isMine: false }));
        });
        return function () {
            socket.disconnect();
        };
    }, [addMessage]);
    var sendMessage = (0, react_1.useCallback)(function (content) {
        if (socket) {
            var message = {
                id: Date.now().toString(),
                content: content,
                timestamp: new Date().toISOString(),
                isMine: true,
            };
            socket.emit('message', message);
            addMessage(message);
        }
    }, [addMessage]);
    return { sendMessage: sendMessage };
};
exports.useWebSocket = useWebSocket;
