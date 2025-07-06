export default function InputField({
    label,
    id,
    name = id, // default name igual al id
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}) {
    return (
        <div className="space-y-1">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-0"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-2 border rounded-xl ${
                    error ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
