/* eslint-disable no-unused-vars */
import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRoute";

function App() {
  const { loading } = useAuth();
  return (
    <div className="container mx-auto font-Prompt" data-theme="light">
      {loading && <span className="loading loading-spinner loading-md"></span>}
      {!loading && <AppRouter />}
    </div>
  );
}

export default App;
