const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <span>
                    &copy; {new Date().getFullYear()} MiApp. Todos los derechos
                    reservados.
                </span>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <a href="/privacy" className="hover:underline">
                        Privacidad
                    </a>
                    <a href="/terms" className="hover:underline">
                        Términos
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contacto
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
