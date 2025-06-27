import { FaBox } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import OptionCard from "./options/OptionCard";

const options = [
    {
        icon: <FaBox className="h-6 w-6 text-white" />,
        title: "Productos",
        desc: "secciona una de las opciones del menu para comenzar",
        bg: "bg-primary",
    },
    {
        icon: <IoMdCart className="h-8 w-8 text-white" />,
        title: "Pedidos",
        desc: "secciona una de las opciones del menu para comenzar",
        bg: "bg-green",
    },
    {
        icon: <HiUserGroup className="h-8 w-8 text-white" />,
        title: "Usuarios",
        desc: "secciona una de las opciones del menu para comenzar",
        bg: "bg-purple",
    },
];

export default function Options() {
    return (
        <section className="flex items-center justify-around flex-wrap gap-4 p-6">
            {options.length <= 0 && <p className="text-slate-400">No hay opciones disponibles</p>}
            {options.length > 0 &&
                options.map((option, index) => <OptionCard key={index} icon={option.icon} title={option.title} desc={option.desc} bg={option.bg} />)}
        </section>
    );
}
