export default function NavButton({text, onClick, scrollRef}) {
    return (
        <button className="text-text-secondary px-4 py-2 rounded-full hover:text-accent hover:cursor-pointer transition-colors text-sm" onClick={onClick}>
            {text}
        </button>
    )
}