import type { ReactNode } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  rightIcon?: ReactNode;
}

export default function InputField({
  label,
  type = "text",
  placeholder,
  error,
  rightIcon,
}: InputFieldProps) {
  return (
    <div>
      
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={` w-full h-[60px]  border rounded-3xl p-[20px]  focus:outline-none focus:ring-1 ${
            error
              ? "border-red-500 "
              : "border-neutral-700 focus:ring-neutral-700"
          }`}
        />
        <label className="absolute left-5 top-[-12px] bg-white  text-black px-1">
        {label}
      </label>
        {rightIcon && (
          <div className="absolute right-5 top-5 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
      <p className="text-sm text-red-500 mt-1  h-14">{error}</p>
    </div>
  );
}
