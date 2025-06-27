import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
    const path = window.location.pathname;

    if (path === "/dashboard") {
        return <Dashboard />;
    }

    return <Home />;
}

export default App;
