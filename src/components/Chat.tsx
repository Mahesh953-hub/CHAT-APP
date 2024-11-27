import React from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import { useMessages } from '../store/messageStore';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const Chat: React.FC = () => {
  const { sendMessage } = useWebSocket();
  const messages = useMessages((state) => state.messages);

  return (
    <div className="flex flex-col h-full p-4">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};