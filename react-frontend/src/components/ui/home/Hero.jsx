import Button from "./hero/Button";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-between m-6 gap-6">
            <h1 className="font-[900] text-[3.5rem]">Productos y Pedidos</h1>
            <h3 className="text-xl text-slate-400">secciona una de las opciones del menu para comenzar</h3>
            <div className="flex gap-4 m-6">
                <Button
                    text={"Iniciar"}
                    className={"bg-primary text-white font-bold py-4 px-4 rounded-xl text-2xl"}
                    action={() => {
                        console.log("iniciar");
                    }}
                />
                <Button
                    text={"Registrar"}
                    className={"bg-transparent text-primary font-bold py-4 px-4 rounded-xl text-2xl border-2 border-primary"}
                    action={() => {
                        console.log("registrar");
                    }}
                />
            </div>
        </section>
    );
}
