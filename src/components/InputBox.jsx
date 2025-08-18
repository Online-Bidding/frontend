
const InputField = ({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  error,
  icon,
  className = "",
  isTagInput = false,
  tags = [],
  onTagRemove,
  ...props
}) => {
  return (
    <div className={`w-full max-w-md ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      {/* Input with icon */}
      <div className="relative mb-2">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`w-[400px] px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            icon ? "pl-10" : ""
          }`}
          {...props}
        />
      </div>

      {/* Tags display (only if isTagInput is true) */}
      {isTagInput && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => onTagRemove(tag)}
                className="ml-1.5 text-indigo-600 hover:text-indigo-900"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Error message */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;