const team = [
    {
        name: "Darío Benítez",
        role: "Desarrollador Fullstack",
        description:
            "Apasionado por el código limpio y las soluciones escalables.",
        image: "https://avatars.githubusercontent.com/u/129878552?v=4", // Cambiá por la ruta real
    },
    {
        name: "Belén Rodríguez",
        role: "Desarrollador fullstack",
        description: "Crea experiencias que combinan funcionalidad y estética.",
        image: "https://avatars.githubusercontent.com/u/143747582?s=400&u=e49302fc6c414bd5fe43b5eb11ba708eefa78e3f&v=4",
    },
    {
        name: "Bruno González",
        role: "Desarrollador fullstack",
        description: "Encargado de las vistas del sistema, estilos, etc.",
        image: "https://avatars.githubusercontent.com/u/207612737?v=4",
    },
    {
        name: " Dante Salinas",
        role: "Desarrollador fullstack",
        description:
            "Gestiona la estructura de datos y optimiza consultas para un rendimiento óptimo.",
        image: "https://avatars.githubusercontent.com/u/206265191?v=4",
    },
];

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                Sobre Nosotros
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold">{member.name}</h2>
                        <p className="text-sm text-blue-600">{member.role}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
