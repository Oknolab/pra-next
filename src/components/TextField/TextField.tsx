import clsx from "clsx";

type TextFieldProps = {
  label: string;
  value?: string;
  name?: string;
  onChange?: (name: string, value: string) => void;
  placeholder?: string;
  className?: string;
}

export const TextField = ({label, placeholder, className, name="", onChange, value=""}: TextFieldProps) => {
  const _className = clsx(
    'flex items-center space-x-2',
    className
  );

  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  return (
    <label className={_className}>
      <span>{label}</span>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded px-2 py-1"
        value={value}
        onChange={_onChange}
      />
    </label>
  )
}
