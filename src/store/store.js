import create from "zustand";
import axios from "axios";

const useTodos = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  fetchTodos: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      set({ todos: response.data });
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  },
}));

const useUser = create((set) => ({
  user: {
    id: "3",
    name: "test1",
    email: "test1@gmail.com",
    picture:
      "https://res-console.cloudinary.com/dce2p75s7/thumbnails/v1/image/upload/v1717686730/ZHV0bGN6c3Q2aHdtdHQyOHhmaDQ=/drilldown",
    status: "hello test1",
    token: "3",
  },
}));

const useChat = create((set) => ({
  conversations: [],
  activeConversation: {},
  messages: [],
  getConversations: async () => {
    try {
      const response = await axios.get("http://localhost:8080/conversation");
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
}));

export { useTodos, useUser, useChat };
