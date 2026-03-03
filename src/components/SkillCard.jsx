export default function SkillCard({text, children}) {
    return (
        <div className="w-full h-full min-h-[150px] flex flex-col justify-start items-center bg-white rounded-2xl shadow-sm border border-surface font-body">
            <div className="w-full flex justify-center items-center text-text-primary text-md uppercase tracking-wide font-bold py-1 border-b-2 border-text-secondary/30">
                <p>{text}</p>
            </div>
            <div className="w-full flex inline-flex justify-start items-center text-text-secondary p-2 flex-wrap gap-2">
                {children}
            </div>
        </div>
    );
}