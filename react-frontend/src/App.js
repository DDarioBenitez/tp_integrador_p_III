import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";

function App() {
    const path = window.location.pathname;

    if (path === "/dashboard") {
        return <Dashboard />;
    }

    if (path === "/login") {
        return <Login />;
    }

    return <Home />;
}

export default App;
