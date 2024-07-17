import create from "zustand";
import axios from "axios";

const useUser = create((set) => ({
  user: {},
  resive_id: "",
  getUser: (user) => set({ user: user }),
  getStore_Id: async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/product/user/${id}`
      );
      set({ resive_id: response.data });
    } catch (error) {
      console.error("Failed to getStore_Id", error);
    }
  },
}));

const useChat = create((set) => ({
  conversations: [],
  activeConversation: {},
  messages: [],
  messageSocket: {},
  getConversations: async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/conversation", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ conversations: response.data });
    } catch (error) {
      console.error("Failed to getConversations", error);
    }
  },
  open_create_conversation: async (values) => {
    try {
      const { token, receiver_id } = values;
      const response = await axios.post(
        "http://localhost:8080/conversation",
        { receiver_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set({ activeConversation: response.data });
    } catch (error) {
      console.error("Failed to open_create_conversation", error);
    }
  },

  getConversationMessages: async (values) => {
    try {
      const { token, convo_id } = values;
      const response = await axios.get(
        `http://localhost:8080/message/${convo_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set({ messages: response.data });
    } catch (error) {
      console.error("Failed to getConversationMessages", error);
    }
  },

  sendMessage: async (values) => {
    try {
      const { token, message, convo_id, files } = values;
      const response = await axios.post(
        "http://localhost:8080/message/",
        {
          message,
          convo_id,
          files,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => {
        const msgSocket = response.data;
        const newMessage = response.data;
        const newMessages = [...state.messages, newMessage];
        const conversation = {
          ...newMessage.conversation,
          latestMessage: newMessage,
        };

        const newConversations = [
          conversation,
          ...state.conversations.filter((c) => c.id !== conversation.id),
        ];

        return {
          messages: newMessages,
          conversations: newConversations,
          messageSocket: msgSocket,
        };
      });

      // set((state) => {
      //   const news = state.messages.map((msg) => msg + " haha");
      //   return { messages: news };
      // });
    } catch (error) {
      console.error("Failed to sendMessage", error);
    }
  },
}));

const useProduct = create((set) => ({
  products: [],
  searchProducts: [],

  getProducts: async () => {
    try {
      const response = await axios.get("http://localhost:8080/product");
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to getProducts", error);
    }
  },

  searchProduct: async (keyword) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/search?keyword=${keyword}`
      );
      set({ searchProducts: response.data });
    } catch (error) {
      console.error("Failed to searchProducts", error);
    }
  },

  searchCategory: async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/search/category?category=${category}`
      );
      set({ searchProducts: response.data });
    } catch (error) {
      console.error("Failed to searchCategory", error);
    }
  },
}));

export { useUser, useChat, useProduct };

// const useTodos = create((set) => ({
//   todos: [],
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//   removeTodo: (id) =>
//     set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
//   fetchTodos: async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       set({ todos: response.data });
//     } catch (error) {
//       console.error("Failed to fetch todos", error);
//     }
//   },
// }));
