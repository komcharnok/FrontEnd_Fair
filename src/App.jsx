import useAuth from "./hooks/useAuth";

import SearchProduct from "./pages/searchProduct/SearchProduct";
import TodoList from "./pages/todo/TodoList";
import { useUser } from "./store/store";
import MainChat from "./pages/chatApp/MainChat";
import HomePage from "./pages/home/HomePage";


function App() {
  const { loading } = useAuth();
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-start font-Prompt">
      {loading && <span class="loading loading-spinner loading-md"></span>}
      {!loading && <AppRouter />}
    </div>
  );
}

export default App;
