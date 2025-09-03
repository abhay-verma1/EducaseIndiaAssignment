export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  name,
}) => {
  const id = `input-${name}`;

  return (
    <div className="relative mb-5">
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className="peer w-full px-4 h-[40px] pt-4 pb-4 border-2 border-purple-500 rounded-lg 
                   focus:border-purple-600 focus:ring-0 outline-none transition
                   placeholder-transparent"
      />
      <label
        htmlFor={id}
        className={`absolute left-2 bg-white px-1 text-[10px] text-purple-600 cursor-text
                   transition-all peer-placeholder-shown:top-2 -top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[13px]
                   peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-purple-600`}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

export const RadioOption = ({
  name,
  options,
  selected,
  onChange,
  label,
  required = false,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
        {required && "*"}
      </label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              name={name}
              id={`${name}-${option}`}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              required={required}
            />
            <label
              htmlFor={`${name}-${option}`}
              className="ml-2 block text-sm text-gray-700"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
