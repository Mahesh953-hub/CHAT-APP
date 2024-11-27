export interface Message {
  id: string;
  content: string;
  timestamp: string;
  isMine: boolean;
}

export interface User {
  id?: string;
  name: string;
  avatar?: string;
}

export type Theme = 'light' | 'dark';