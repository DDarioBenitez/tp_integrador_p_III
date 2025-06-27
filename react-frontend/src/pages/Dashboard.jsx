import { useEffect, useState } from "react";
import TitleDashboard from "../components/ui/dashboard/TitleDashboard";

export default function Dashboard() {
    const [count, setCount] = useState(0);
    const name = "Dario";

    useEffect(() => {
        console.log("ejecute el hook");
    }, [count, name]);

    return <div className="Dashboard"></div>;
}
