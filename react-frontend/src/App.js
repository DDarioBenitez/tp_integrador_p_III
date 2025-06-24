import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
    const path = window.location.pathname;

    if (path === "/dashboard") {
        return <Dashboard />;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello</h1>
        </div>
    );
}

export default App;
