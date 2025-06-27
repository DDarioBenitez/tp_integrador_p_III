export default function OptionCard({ icon, title, desc, bg = "bg-primary" }) {
    return (
        <article className="flex flex-col items-center justify-center bg-white rounded-2xl p-12 gap-4 shadow-lg w-[26rem]">
            <div className={`p-6 ${bg} rounded-3xl`}>{icon}</div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <p className="text-slate-400 text-center break-words">{desc}</p>
        </article>
    );
}
