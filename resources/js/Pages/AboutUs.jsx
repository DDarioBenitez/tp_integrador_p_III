const team = [
    {
        name: "Juan Pérez",
        role: "Desarrollador Fullstack",
        description:
            "Apasionado por el código limpio y las soluciones escalables.",
        image: "/images/juan.jpg", // Cambiá por la ruta real
    },
    {
        name: "María García",
        role: "Diseñadora UX/UI",
        description: "Crea experiencias que combinan funcionalidad y estética.",
        image: "/images/maria.jpg",
    },
    {
        name: "Carlos López",
        role: "Especialista en Marketing",
        description: "Ayuda a posicionar nuestros productos en el mercado.",
        image: "/images/carlos.jpg",
    },
    {
        name: "Ana Torres",
        role: "Project Manager",
        description:
            "Organiza y lidera los proyectos con eficiencia y empatía.",
        image: "/images/ana.jpg",
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
