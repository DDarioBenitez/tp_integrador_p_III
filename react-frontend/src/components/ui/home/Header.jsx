import { FaBox } from "react-icons/fa";
export default function Header() {
    return (
        <header className="m-6">
            <h2 className="font-bold text-3xl flex gap-3 items-center">
                <span>
                    <FaBox className="h-8 w-8 text-primary" />
                </span>{" "}
                BussinesHud
            </h2>
        </header>
    );
}
