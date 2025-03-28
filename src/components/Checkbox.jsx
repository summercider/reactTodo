export default function Checkbox({
  name,
  label,
  checked,
  onChange,
  className,
}) {
  return (
    <label className={`checkbox ${className}  `}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className="line-clamp-2"> {label} </span>
    </label>
  );
}
