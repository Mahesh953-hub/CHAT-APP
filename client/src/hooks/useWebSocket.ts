import { useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { useMessages } from '../store/messageStore';

let socket: Socket;

export const useWebSocket = () => {
  const addMessage = useMessages((state) => state.addMessage);

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('message', (message) => {
      addMessage({
        ...message,
        isMine: false,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const sendMessage = useCallback((content: string) => {
    if (socket) {
      const message = {
        id: Date.now().toString(),
        content,
        timestamp: new Date().toISOString(),
        isMine: true,
      };
      socket.emit('message', message);
      addMessage(message);
    }
  }, [addMessage]);

  return { sendMessage };
};