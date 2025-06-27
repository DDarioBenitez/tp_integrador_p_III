import Header from "../components/ui/home/Header";
import Hero from "../components/ui/home/Hero";
import Options from "../components/ui/home/Options";

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-primaryBg">
            <Header />
            <main className="w-full flex-grow flex flex-col">
                <Hero />
                <Options />
            </main>
        </div>
    );
}
