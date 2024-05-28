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
    'grid grid-cols-3 gap-2 items-center',
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
      <span className="text-right">{label}</span>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded px-2 py-1 col-span-2 w-full"
        value={value}
        onChange={_onChange}
      />
    </label>
  )
}
