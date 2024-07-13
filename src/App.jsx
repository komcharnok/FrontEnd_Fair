import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";
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
