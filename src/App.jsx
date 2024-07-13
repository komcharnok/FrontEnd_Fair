import SearchProduct from "./pages/searchProduct/SearchProduct";
// import TodoList from "./pages/todo/TodoList";
// import { useUser } from "./store/store";
import MainChat from "./pages/chatApp/MainChat";
import HomePage from "./pages/home/HomePage";
import AppRouter from "./routes/Approuter";

function App() {
  return (
    // <div data-theme="light">
    <div data-theme="light">
      <AppRouter />
      {/* <SearchProduct /> */}
    </div>
  );
}

export default App;
