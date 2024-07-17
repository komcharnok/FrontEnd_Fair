import create from "zustand";
import { io } from "socket.io-client";

const useSocketStore = create((set) => {
  const socket = io("http://localhost:8080");
  return {
    socket,
  };
});

export default useSocketStore;
