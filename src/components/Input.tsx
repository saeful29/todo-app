import { ChangeEventHandler } from "react";

type PropsType = {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  value?: string;
};

export default function Input(props: PropsType) {
  const { type, placeholder, defaultValue, name, value, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      className='outline-none ring-[1px] focus:ring-[2px] ring-indigo-500 rounded py-1.5 px-2 transition-all w-full'
    />
  );
}
