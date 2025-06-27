export default function Button({ text, className, action }) {
    return (
        <button onClick={action} className={className}>
            {text}
        </button>
    );
}
