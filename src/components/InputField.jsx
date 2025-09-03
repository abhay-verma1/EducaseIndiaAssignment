export const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  name 
}) => {
  const id = `input-${name}`;

  return (
    <div className="relative mb-6">
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className="peer w-full px-4 pt-4 pb-2 border-2 border-purple-500 rounded-lg 
                   focus:border-purple-600 focus:ring-0 outline-none transition
                   placeholder-transparent"
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600 cursor-text
                   transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                   peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600"
      >
        {label}{required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
