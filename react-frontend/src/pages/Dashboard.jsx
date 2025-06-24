import { useEffect, useState } from "react";
import TitleDashboard from "../components/dashboard/TitleDashboard";

export default function Dashboard() {
    const [count, setCount] = useState(0);
    const name = "Dario";

    useEffect(() => {
        console.log("ejecute el hook");
    }, [count, name]);

    return (
        <div className="Dashboard">
            <TitleDashboard title={"Dashboard desde el padre"} />
            <h2>Hola {name}</h2>
            <button onClick={() => setCount(count + 1)}>Click para contar {count}</button>
            {count > 5 ? <p>Welcome to the dashboard!</p> : null}
        </div>
    );
}
