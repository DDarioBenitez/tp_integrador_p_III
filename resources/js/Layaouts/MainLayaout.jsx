import Footer from "../Components/UI/Shared/Footer";
import NavBar from "../Components/UI/Shared/NavBar";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <NavBar />
            <main className="flex-1 flex flex-col overflow-hidden p-2 sm:p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
