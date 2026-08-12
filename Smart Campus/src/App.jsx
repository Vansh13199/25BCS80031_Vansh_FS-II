import Dashboard from "./components/Dashboard";
import { StudentProvider } from "./context/studentContext.jsx";

function App() {
  return (
    <StudentProvider>
      <Dashboard />
    </StudentProvider>
  );
}

export default App;