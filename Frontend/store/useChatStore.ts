import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import api from '@/services/api';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isMine: boolean;
}

interface Conversation {
  id: string;
  with: string; // user ID of the other person
  name: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
}

interface ChatStore {
  // State
  conversations: Conversation[];
  activeConversation: string | null;
  socket: Socket | null;
  isConnected: boolean;

  // Actions
  initializeSocket: (userId: string, token: string) => void;
  sendMessage: (conversationId: string, text: string) => void;
  selectConversation: (id: string) => void;
  markAsRead: (conversationId: string) => void;
  addConversation: (userId: string, name: string, avatar?: string) => void;
  loadConversations: () => Promise<void>;
  disconnect: () => void;
}

const useChatStore = create<ChatStore>((set, get) => ({
  conversations: [],
  activeConversation: null,
  socket: null,
  isConnected: false,

  // Initialize WebSocket connection
  initializeSocket: (userId: string, token: string) => {
    const { socket } = get();
    if (socket?.connected) return;

    const newSocket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000', {
      auth: { token },
      query: { userId },
    });

    newSocket.on('connect', () => {
      console.log('Chat socket connected');
      set({ isConnected: true });
    });

    newSocket.on('disconnect', () => {
      console.log('Chat socket disconnected');
      set({ isConnected: false });
    });

    newSocket.on('message', (msg: any) => {
      const { conversations, activeConversation } = get();
      const convId = msg.conversationId;

      set({
        conversations: conversations.map((conv) =>
          conv.id === convId
            ? {
                ...conv,
                messages: [
                  ...conv.messages,
                  {
                    id: msg.id,
                    text: msg.text,
                    sender: msg.sender,
                    timestamp: new Date(msg.timestamp),
                    isMine: msg.sender === userId,
                  },
                ],
                lastMessage: msg.text,
                lastMessageTime: new Date(msg.timestamp),
                unreadCount:
                  activeConversation === convId ? 0 : conv.unreadCount + 1,
              }
            : conv
        ),
      });
    });

    newSocket.on('typing', ({ conversationId, userName }) => {
      // Optional: show typing indicator
      console.log(`${userName} is typing...`);
    });

    set({ socket: newSocket });
  },

  // Send a message
  sendMessage: async (conversationId: string, text: string) => {
    const { socket, conversations } = get();
    if (!socket || !socket.connected) return;

    const message = {
      conversationId,
      text,
      timestamp: new Date().toISOString(),
    };

    socket.emit('message', message);

    // Optimistic UI update
    set({
      conversations: conversations.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              messages: [
                ...conv.messages,
                {
                  id: Date.now().toString(),
                  text,
                  sender: 'me',
                  timestamp: new Date(),
                  isMine: true,
                },
              ],
              lastMessage: text,
              lastMessageTime: new Date(),
            }
          : conv
      ),
    });
  },

  // Select active conversation
  selectConversation: (id: string) => {
    set({ activeConversation: id });
    get().markAsRead(id);
  },

  // Mark conversation as read
  markAsRead: (conversationId: string) => {
    set({
      conversations: get().conversations.map((conv) =>
        conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
      ),
    });
  },

  // Add a new conversation (e.g., when starting chat with seller)
  addConversation: (userId: string, name: string, avatar?: string) => {
    const newConv: Conversation = {
      id: userId,
      with: userId,
      name,
      avatar,
      lastMessage: 'Say hi!',
      lastMessageTime: new Date(),
      unreadCount: 0,
      messages: [],
    };

    set({
      conversations: [newConv, ...get().conversations],
      activeConversation: userId,
    });
  },

  // Load conversations from API
  loadConversations: async () => {
    try {
      const res = await api.get('/chat/conversations');
      const loaded: Conversation[] = res.data.map((c: any) => ({
        id: c._id,
        with: c.participants.find((p: any) => p._id !== res.data.currentUserId)._id,
        name: c.participants.find((p: any) => p._id !== res.data.currentUserId).name,
        avatar: c.participants.find((p: any) => p._id !== res.data.currentUserId).avatar,
        lastMessage: c.lastMessage?.text || 'No messages yet',
        lastMessageTime: new Date(c.lastMessage?.timestamp || Date.now()),
        unreadCount: c.unreadCount || 0,
        messages: [],
      }));

      set({ conversations: loaded });
    } catch (err) {
      console.error('Failed to load conversations', err);
    }
  },

  // Disconnect socket
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null, isConnected: false });
    }
  },
}));

export default useChatStore;