import { useState, lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => setShowDashboard(!showDashboard)}>
        {showDashboard ? "HideDashboard" : "ShowDashboard"}
      </button>

      <Suspense fallback={<p>Loading Dashboard...</p>}>
        {showDashboard && <Dashboard />}
      </Suspense>
    </div>
  );
}

export default App;